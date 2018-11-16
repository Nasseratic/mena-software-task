import express from "express";
import 'dotenv/config';
import routes from "./routes";
import dbConnect from "./bootstrap/db";
import bootMidllewares from "./bootstrap/middlewares";
import middlewares from "./middlewares"

const app = express();

// boot inital middlewares like bodyparser and CROS
bootMidllewares(app);

// root router
app.use(routes);

// connect to mongodb then start listening
dbConnect().then(()=>{
  app.listen(process.env.PORT||3000, ()=>{
    console.log("The server up and running..")
  });
})
