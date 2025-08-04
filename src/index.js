import dotenv from "dotenv";
// const mongoose = require('mongoose');
// import {DB_NAME} from "./constants";
import connectToDb from "./db/index.js";

dotenv.config({
  path: './env'
})

connectToDb()





/*const express = require('express');
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

module.exports = connectedToDb;*/