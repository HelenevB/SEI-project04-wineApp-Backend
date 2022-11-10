const express = require ('express');
const router = express.Router();
const authCtrl = require("../controllers/auth")

router.use(express.json());

router.post("/auth/signup", authCtrl.auth_signup_post)
router.post("/auth/signin", authCtrl.auth_signin_post)



module.exports=router