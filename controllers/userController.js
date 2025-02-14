import { createUser, getUser, checkUserExists } from "../services/userService.js";
import { hashPasswordFun, validatePassword } from "../helper/encryption.js";
import { getToken } from "../auth/jwtToken.js";

//  Register User
export const register = async (req, res) => {
    let { name, mobile, email, password } = req.body;
    
    try {
        // Check if user already exists
        if (await checkUserExists(email, mobile)) {
            return res.status(400).json({ message: "User already registered" });
        }

        // Hash password and create user
        let hashedPassword = await hashPasswordFun(password);
        let result = await createUser({ name, mobile, email, password: hashedPassword });

        if (result.success) {
            return res.status(201).json(result);
        } else {
            return res.status(400).json(result);
        }
    } catch (error) {
        console.error("Error in register:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// ✅ User Login
export const userLogin = async (req, res) => {
    let { email, password } = req.body;
    
    try {
        let user = await getUser(email);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        let isValidPassword = await validatePassword(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        let token = getToken({ email });
        return res.status(200).json({ token, message: "User login successful" });
    } catch (error) {
        console.error("Error in userLogin:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
