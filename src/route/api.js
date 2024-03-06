const express=require('express');
const userController=require('../controller/userController');


const router=express.Router();

router.post("/registration",userController.registration);
router.post("/login",userController.login);
router.post("/profileUpdate",userController.profileUpdate);
router.post("/profileDetails",userController.profileDetails);
router.get("/verifyEmail/:email",userController.verifyEmail);
router.get("/verifyOtp/:email/:otp",userController.verifyOtp);
router.get("/passwordReset/:email/:otp/:password",userController.passwordReset);


module.exports=router;