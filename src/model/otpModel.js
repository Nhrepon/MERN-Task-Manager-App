const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    email:{type:String, require:true},
    otp:{type:String, require:true},
    status:{type:String, require:true}
    
},{
    timestamps:true, versionKey:true
});

const otpModel=mongoose.model('otps', databaseSchema);

module.exports=otpModel;