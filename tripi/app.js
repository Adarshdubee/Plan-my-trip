const express= require('express');
const mongoose=require('mongoose');
const multer = require('multer');
const bodyParser=require('body-parser');
const app=express();

var fs = require('fs');
var path = require('path');


const cors=require('cors');
 const port=process.env.port  || 8000
 const authRoute=require('./routes/auth-routes');
 
 
mongoose.connect("mongodb://localhost:27017/tripi",
{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on("connected",()=>{
   console.log("connect ho gaya");
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.set("view engine", "ejs");
app.use("/images",express.static('uploads'));

  
// const Storage = multer.diskStorage({
//     destination: 'uploads',
//     filename:(req,file,cb)=>{
//      cb(null,file.originalname);
//     },
// });
// const upload = multer({ storage: Storage }).single('testImage');
 app.post

 app.use('/auth',authRoute);

 app.get('/',(req,res)=>{
    res.send("jooo")
 });

 app.listen(port,() =>{
    console.log("port is connected to :",port)
 });