const usersModel = require("../model/usersModel");
const jwt=require('jsonwebtoken');

exports.registration = async (req,res)=>{
    try{
        let reqBody=req.body;

        await usersModel.create(reqBody);

        res.json({status:"success", message:"User registration success"});
    }catch(err){
        res.json({status:"Fail", message:"User registration fail ..."});
    }
}





//////////////
exports.login = async(req,res)=>{
    try{
        let reqBody=req.body;

        let user=await usersModel.find(reqBody);
        if(user.length>0){
            let payload={exp:Math.floor(Date.now()/1000)+(24*60*60),data:reqBody['email']}
            let token=jwt.sign(payload,"123");
            res.json({status:"success", message:"User found ...", token:token});
        }else{
            res.json({status:"fail", message:"User not found ..."});
        }
        

    }catch(err){
        res.json({status:"Fail", message:err});
    }
}





////////////
exports.profileUpdate=(req,res)=>{
    try{

    }catch(err){

    }
}





////////////
exports.profileDetails=(req,res)=>{
    try{

    }catch(err){

    }
}






////////////////
exports.verifyEmail=(req,res)=>{
    try{

    }catch(err){

    }
}





///////////////
exports.verifyOtp=(req,res)=>{
    try{

    }catch(err){

    }
}





////////////////////
exports.passwordReset=(req,res)=>{
    try{

    }catch(err){

    }
}