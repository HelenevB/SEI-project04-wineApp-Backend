const User = require("../models/User")
const jwt= require("jsonwebtoken")

const bcrypt = require('bcrypt');
const { FavouriteWine } = require("../models/FavouriteWine");
const salt = 10;

exports.auth_signup_get =(req, res) => {
    res.render("auth/signup");
}

exports.auth_signup_post = (req, res) => {
    let user = new User (req.body);
    let hash = bcrypt.hashSync(req.body.password, salt)
    console.log(hash);
    console.log(user)

    user.password = hash;

    user.save()
    .then(() =>{
        // res.redirect("/")
        res.json({"message": "User created successfully"})
    })
    .catch((err) =>{
        console.log(err)
        // res.send("Please try again later. ")
        res.json({"message": "Error creating user please try again later"})
    })
}

exports.auth_signin_post = async(req, res) => {
    let {emailAddress, password} = req.body;
    console.log(emailAddress);

    try {
        // this means emailAddress: emailAddress
        // await means await for this call to end , async needs to be stated to use await
        let user =  await User.findOne({emailAddress})
        console.log(user);
        if(!user)
        {
            return res.json({"message": "User not found!!"}).status(400)
        }
    //    Password Comparison 
        const isMatch = await bcrypt.compareSync(password, user.password)
        console.log(password); 
        console.log(user.password);
        
        if(!isMatch){
            return res.json({"message": "Password not match!!"}).status(400)
            // 400 == unsuccesful 
        }

        // if get to this put the password and email match so need to get jwt token

         const payload = {
            user:{
                id: user._id,
                name: user.firstName
            }
         }
        jwt.sign(
            payload,
            process.env.SECRET,
            {expiresIn: 3600000000000},
            (err, token) => {
                if(err) throw err;
                res.json({token}).status(200)
            }
        )
    }
    catch(error){
        // this is the erro for the whole try function 
        res.json({"message": "You are not logged in"}).status(400)
        console.log(error)
    }
}

