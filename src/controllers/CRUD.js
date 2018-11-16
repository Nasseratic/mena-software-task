import {_200,_404,_500} from "../responses";
import {Router} from "express";

export default class {
  constructor(model) {
    this.Model = model;
    this._200 = _200;
    this._404 = _404;
    this._500 = _500;
    this.Router = Router();
  }
  
  create = (req, res) => {
    new this.Model(req.body)
      .save()
      .then(result => {
        _200(res,result);
      })
      .catch(err => {
        _500(res, err );
      });
  };

  update = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    this.Model.findById(id)
      .then(doc => {
        if (!doc) return _404(res,'Sorry, not found');
        for (let key in data) {
          doc[key] = data[key];
        }
        doc
          .save()
          .then((result) => {
            return _200(res,result);
          })
          .catch(err => {
            return  _500(res,err);
          });
      })
      .catch(err => {
        return _500(res,err);
      });
  };

  del = (req, res) => {
    const { id } = req.params;
    this.Model.findById(id)
      .then(doc => {
        if (!doc) return _404(res,"Sorry, not found");
        doc
          .remove()
          .then(deleted => {
            return _200(res,deleted);
          })
          .catch(err => {
            return _500(res,err);
          });
      })
      .catch(err => {
        return _500(res,err);
      });
  };

  get = (req, res) => {
    let { id } = req.params;
    this.Model.findById(id)
      .then(result => {
        if (result) _200(res,result);
        else _404(res,'Sorry, not found');
      })
      .catch(err => {
        _500(res,err);
      });
  8};

  all = (req, res) => {
    const {limit,offset} = req.query;
    this.Model.find().skip(offset||0).limit(limit||50)
      .then(result => {
        _200(res,result);
      })
      .catch(err => {
        _500(res,err);
      });
  };

  default_routes = () =>{
    this.Router.get('/', this.all);
    this.Router.get('/:id', this.get);
    this.Router.post('/',this.create);
    this.Router.patch('/:id', this.update);
    this.Router.delete('/:id', this.del);
  }
  
  router = ()=>{
      this.default_routes();
  }
}

