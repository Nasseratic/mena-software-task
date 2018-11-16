import middlewares from "../middlewares"
export default (app)=>{
  app.use( '/' , middlewares.CROS);
  app.use( '/' , middlewares.bodyParse);
  app.use( '/' , middlewares.urlencodedParser);
  app.use( '/' , middlewares.removePowered);
}