import { createUser } from "../services/userService.js";
export let registerController=async(req,res)=>{
  let {name,mobile,email,password}=req.body
  console.log(req.body);
  try {
      // let hashPassword =await hashPasswordFun(password)
      let status=await createUser({name,mobile,email,password}) 
      if(status=="success"){
          res.send("success")
      }else{
          res.send("error")
      }
     
  } catch (error) {
      console.log(error);
    }
}

  