import express from 'express'
const app=express() //it create instance of application
import dbConnect from './db/connection.js'
import dotenv from 'dotenv'
import userRoute from './routers/studentRoute.js'
dotenv.config()//it will load .env file varaibles into process.env object
let port=process.env.PORT 

//for establishing connection with DB
dbConnect(process.env.DBURL,process.env.DBNAME)

//express parser 
app.use(express.json())//it parser provided by express


//mapping routes
app.use('/user',userRoute)
app.listen(port,()=>{
    console.log(`serever started at port number ${port}`);
})