import jwt from 'jsonwebtoken'

export let getToken=(payload)=>{
    let token=jwt.sign(payload,process.env.PRIVATEKEY)
    console.log(token);
    return token
}

export const verifyToken=async(token,email)=>{
  try {
    let payload=await jwt.verify(token,process.env.PRIVATEKEY)
    console.log(`pay load is ${payload.email}`);
    if(payload.email==email){
        return true
    }else{
        return false
    }
  } catch (error) {
    
  }
}

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
