import userModel from "../models/userModel.js";

//  Get user by email
export const getUser = async (email) => {
    try {
        let user = await userModel.findOne({ email }); // Await the database query
        return user;
    } catch (error) {
        console.error(`Error in getUser service: ${error}`);
        return null;
    }
};

//  Create a new user
export const createUser = async (data) => {
    try {
        let newUser = new userModel(data);
        await newUser.save();
        return { success: true, message: "User registered successfully" };
    } catch (error) {
        console.error("Error in createUser service:", error);
        return { success: false, message: "User registration failed" };
    }
};

// Check if user exists (for registration validation)
export const checkUserExists = async (email, mobile) => {
    try {
        let user = await userModel.findOne({ $or: [{ email }, { mobile }] });
        return user ? true : false;
    } catch (error) {
        console.error("Error in checkUserExists service:", error);
        return false;
    }
};
