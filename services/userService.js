import userModel from "../models/userModel.js";

export let getUser = async (email) => {
    try {
        let user = await userModel.findOne({ email }); // Added `await`
        return user;
    } catch (error) {
        console.log(`Error in getUser function: ${error}`);
        return null; // Ensure function always returns a value
    }
};



export let createUser=async(data)=>{
try {
    let u1=new userModel(data)
    let result=await u1.save()
    return "success"
} catch (error) {
    console.log(error);
    return "failure"
}
}