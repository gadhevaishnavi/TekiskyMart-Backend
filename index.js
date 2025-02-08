import express from 'express'
import cors from 'cors';
const app=express() //it create instance of application
import dbConnect from './db/connection.js'
import dotenv from 'dotenv'
import userRoute from './routers/userRoute.js'
import orderRoute from './routers/orderRoute.js'
import customerRoute from './routers/customerRoute.js'
import clientRoute from './routers/clientRoute.js'
import preOrderRoute from './routers/preOrderRoutes.js'
import productRoute from './routers/productsRoute.js'
import cartRoute from './routers/cartRoute.js'
dotenv.config()//it will load .env file varaibles into process.env object
let port=process.env.PORT || 5000

//for establishing connection with DB
dbConnect(process.env.DBURL,process.env.DBNAME)

// Middleware
app.use(cors()); // Enable CORS for all requests
//express parser 
app.use(express.json())//it parser provided by express


// Serve uploaded images statically
app.use("/uploads", express.static("uploads"));


//mapping routes
app.use('/user',userRoute)
app.use('/order',orderRoute)
app.use('/customer',customerRoute)
app.use('/client', clientRoute);
app.use('/pre', preOrderRoute);
app.use('/product',productRoute)//product routes
app.use("/cart", cartRoute);

app.listen(port,()=>{
    console.log(`serever started at port number ${port}`);
})