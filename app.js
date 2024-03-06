const express=require('express');



const router=require('./src/route/api');
const app=new express();
const rateLimit=require('express-rate-limit');
const helmet=require('helmet');
const hpp=require('hpp');
const cors=require('cors');
const mongoose=require('mongoose');



app.use(cors());

app.use(helmet());

app.use(hpp());

app.use(express.json({limit:'20mb'}));

app.use(express.urlencoded({extended:true}));

const limiter=rateLimit({windowMs:15*60*1000, max:3000});

app.use(limiter);

let url="mongodb://localhost:27017/taskManager"
let option={user:"",pass:"", autoIndex:true}
mongoose.connect(url,option).then((res)=>{
    console.log("Database connection success... ");
}).catch((err)=>{
    console.log(err);
});

/*
mongoose.connect(url,option,(err)=>{
    console.log("Database connection success... ");
    console.log(err);
});
*/

app.use("/api",router);
app.use('*',(req, res)=>{
    //res.writeHead(200,{"content-type":"text/html"});
    res.status(404).json({data:"Not Found"});
});









module.exports=app;