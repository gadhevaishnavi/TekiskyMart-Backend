import userModel from "../models/userModel.js";

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