import CRUD from "./CRUD";
import News from "../models/News";

// that's a design pattern I invented to easily reuse the CRUD and tight the routes to it's controller.. some ppl will like it and other won't

class NewsController extends CRUD {

  constructor() {
    super(News);
    this.router();
  }

  /** For any controller spasifc logic rather than CRUD 
  or for overwriting a CRUD and its routes
  */
  router = () => {
    this.Router.get("/find", this.find);
    this.default_routes();
  };

  // spasifc find for the model
  find = (req, res) => {
    const { limit, offset, title, date, orderBy } = req.query;

    let sort = {};
    orderBy &&
      orderBy.split(",").forEach(e => {
        sort[e] = -1;
      });

    this.Model.find({
      title: new RegExp(title),
      createdAt: { $gte: new Date(date), $lt: new Date(date + " 23:59:59") }
    })
      .skip(offset || 0)
      .limit(limit || 50)
      .sort(sort)
      .then(result => {
        this._200(res, result);
      })
      .catch(err => {
        this._500(res, err);
      });
  };
}

export default new NewsController();
