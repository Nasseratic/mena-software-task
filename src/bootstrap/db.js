import mongoose  from 'mongoose';
import 'dotenv/config';

export default () =>{
  mongoose.Promise = global.Promise;
  
  return mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }).then(() =>{
      console.log('DB Connected');
  }).catch((err)=>{
      if(err) throw err;
      console.log('DB Connection error');
  });
}
