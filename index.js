import express from 'express'
const app=express() //it create instance of application
import dbConnect from './db/connection.js'
import dotenv from 'dotenv'
import userRoute from './routers/userRoute.js'
import productRoute from './routers/productsRoute.js'

dotenv.config()//it will load .env file varaibles into process.env object
let port=process.env.PORT || 5000

//for establishing connection with DB
dbConnect(process.env.DBURL,process.env.DBNAME)

//express parser 
app.use(express.json())//it parser provided by express


// Serve uploaded images statically
app.use("/uploads", express.static("uploads"));


//mapping routes
app.use('/user',userRoute)
app.use('/product',productRoute)//product routes

app.listen(port,()=>{
    console.log(`serever started at port number ${port}`);
})