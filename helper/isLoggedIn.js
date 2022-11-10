const jwt = require("jsonwebtoken")
require("dotenv").config()

module.exports = (req, res, next) => {
    // first we will take token from Header, there are many ways to write the logic below is just one example" 
    //  "x-auth-token is = token"
    const token = req.header("x-auth-token");
    console.log(token);

    if(!token){
        return res.json({"message":" You are not allowed to view this as this is hidden behind the wall of authentication"})
    }

// if has token
   try{
    const decodedToken = jwt.verify(token, process.env.SECRET);
    
    // if token verified it has a user object (from payload), so we an assign to current user which is req.user
    req.user = decodedToken.user;
    // once we have the decoded user we call next. which means go next
    next();
   }
   catch(error){

    return res.json({"message": "your token is invalid "})

   }

}