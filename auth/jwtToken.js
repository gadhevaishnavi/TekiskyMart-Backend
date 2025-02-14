import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
export let getToken=(payload)=>{
    let token=jwt.sign(payload,process.env.PRIVATEKEY)
    console.log(token);
    return token
}

// import jwt from "jsonwebtoken";


dotenv.config(); // Ensure .env is loaded

export const verifyToken = async (token, email) => {
  try {
    let payload = await jwt.verify(token, process.env.PRIVATEKEY);
    console.log(`Payload email: ${payload.email}`);

    return payload.email === email; // Ensure strict equality check
  } catch (error) {
    console.error("Error verifying token:", error);
    return false;
  }
};


export const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Extract the token from the Authorization header

  if (!token) {
    return res.status(401).json({ success: false, message: 'Access Denied. No Token Provided.' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET); // Verify the token using your secret key
    req.user = verified; // Attach user info to the request object
    next(); // Pass control to the next middleware or route handler
  } catch (error) {
    res.status(403).json({ success: false, message: 'Invalid Token' });
  }
};
