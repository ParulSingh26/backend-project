import dotenv from "dotenv";
// import mongoose from 'mongoose';
// import {DB_NAME} from "./constants";
import connectToDb from "./db/index.js";

dotenv.config({
  path: './env'
})

connectToDb()





/*import express from 'express';
const app = express();


const connectedToDb = async()=>{
  try {
   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   app.on("error",(error)=>{
    console.log("ERRR", error);
    throw error
   })

   app.listen(process.env.PORT, ()=>{

    console.log(`App is listening on port ${process.env.PORT}`)
   })
  } catch (error) {
    console.log(error);
    throw err
  }
}

export default connectedToDb;*/