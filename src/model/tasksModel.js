const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    title:{type:String, require:true},
    description:{type:String, require:true},
    status:{type:String, require:true}
    
},{
    timestamps:true,versionKey:false
});

const tasksModel=mongoose.model('tasks', databaseSchema);

module.exports=tasksModel;