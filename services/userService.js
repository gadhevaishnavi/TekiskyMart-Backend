import userModel from "../models/userModel.js";

export let getUser=async(email)=>{
   try {
    let user=await userModel.findOne({email})
    return user
   } catch (error) {
     console.log(`err occured in getuser function ${error}`)
   }
}

export let createUser=async(data)=>{
try {
    let u1=new userModel(data)
    let result=await u1.save()
    return "success"
} catch (error) {
    console.log(error);
    return "failure"
}
}