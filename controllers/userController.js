// import { createUser,getUser } from "../services/userService.js";
// import { hashPasswordFun,validatePassword } from "../helper/encryption.js";
// import { getToken,verifyToken } from "../auth/jwtToken.js";



// export let getProfile=async(req,res)=>{
//     let email=req.params.email
//     let token=req.headers.authorization.split(" ")[1]
//     console.log(token)
//     try {
//         let flag=verifyToken(token,email)
//         if(flag){
//             let user=await getUser(email)
//         let data={name:user.name,email:user.email,mobile:user.mobile}
//         res.status(200).json(data)
//         }
        
//     } catch (error) {
//         res.status(500).json("error occured")
//     }
// }


// export let userLogin=async(req,res)=>{
//     let {email,password}=req.body
//     try {
//         let user=await getUser(email)
//         let flag=await validatePassword(password,user.password)
//         if(flag){
//             let token = getToken({email})
//             let resData={token,"msg":"user login successfully"}
//             // res.status(200).send("user login successfully")
//             res.status(200).json(resData)
//         }
//         else{
//             res.status(400).json("user login failed")
//         }
//     } catch (error) {
//         res.status(500).json("error in catch block")
        
//     }

// }


// export let register=async(req,res)=>{
//     let {name,mobile,email,password}=req.body
//     console.log(req.body);
//     try {
//         let hashPassword =await hashPasswordFun(password)
//         let status=await createUser({name,mobile,email,password:hashPassword}) 
//         if(status=="success"){
//             res.status(200).json("user register successfully")
//         }else{
//             res.status(400).json("user register failed")
//         }
       
//     } catch (error) {
//         res.status(500).json("error in catch block")
//     }
// }

import { createUser, getUser } from "../services/userService.js";
import { hashPasswordFun, validatePassword } from "../helper/encryption.js";
import { getToken, verifyToken } from "../auth/jwtToken.js";

// Get user profile
export let getProfile = async (req, res) => {
    let email = req.params.email;
    let token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Authorization token is missing" });
    }

    try {
        let flag = await verifyToken(token, email); // Await the token verification
        if (!flag) {
            return res.status(401).json({ message: "Invalid token or unauthorized" });
        }

        let user = await getUser(email);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        let data = { name: user.name, email: user.email, mobile: user.mobile };
        res.status(200).json(data);

    } catch (error) {
        console.error("Error in getProfile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// User login
export let userLogin = async (req, res) => {
    let { email, password } = req.body;

    try {
        let user = await getUser(email);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        let flag = await validatePassword(password, user.password);
        if (!flag) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        let token = getToken({ email });
        let resData = { token, message: "User login successful" };

        res.status(200).json(resData);

    } catch (error) {
        console.error("Error in userLogin:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Register user
export let register = async (req, res) => {
    let { name, mobile, email, password } = req.body;
    console.log(req.body);

    try {
        // Check if user already exists
        let existingUser = await getUser(email);
        if (existingUser) {
            return res.status(400).json({ message: "User already registered" });
        }

        // Hash password before saving
        let hashPassword = await hashPasswordFun(password);
        let newUser = await createUser({ name, mobile, email, password: hashPassword });

        if (newUser) {
            res.status(201).json({ message: "User registered successfully" });
        } else {
            res.status(400).json({ message: "User registration failed" });
        }

    } catch (error) {
        console.error("Error in register:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


