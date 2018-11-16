import CRUD from "./CRUD";
import News from "../models/News";



// that's a design pattern I invented to easily reuse the CRUD and tight the routes to it's controller.. some ppl will like it and other won't

class NewsController extends CRUD {

  constructor(){
    super(News);
  }

  /*For any controller spasifc logic rather than CRUD 
  or for overwriting a CRUD and its routes*/

}

export default new NewsController();