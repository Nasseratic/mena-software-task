import {Router} from "express";
import newsController from '../controllers/newsController'
let router = Router();

// use the controller router
router.use('/news', newsController.Router )
//...rest of controllers 


export default router;
