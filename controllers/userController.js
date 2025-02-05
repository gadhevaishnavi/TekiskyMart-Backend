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




// export const getProduct = async (req, res) => {
//     try {
//       const products = await getProductService();
//       res.status(200).json({ success: true, products: products });
//     } catch (error) {
//       console.error("Error in getting products:", error);
//       res.status(500).json({ status: "error", message: "Error in getting products" });
//     }
//   };
  