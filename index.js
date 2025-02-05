import express from 'express'
const app=express() //it create instance of application
import dbConnect from './db/connection.js'
import dotenv from 'dotenv'
import userRoute from './routers/userRoute.js'
import orderRoute from './routers/orderRoute.js'
import customerRoute from './routers/customerRoute.js'
import clientRoute from './routers/clientRoute.js'
import preOrderRoute from './routers/preOrderRoutes.js'

dotenv.config()//it will load .env file varaibles into process.env object
let port=process.env.PORT 

//for establishing connection with DB
dbConnect(process.env.DBURL,process.env.DBNAME)

//express parser 
app.use(express.json())//it parser provided by express


//mapping routes
app.use('/user',userRoute)
app.use('/order',orderRoute)
app.use('/customer',customerRoute)
app.use('/client', clientRoute);
app.use('/pre', preOrderRoute);
app.listen(port,()=>{
    console.log(`serever started at port number ${port}`);
})