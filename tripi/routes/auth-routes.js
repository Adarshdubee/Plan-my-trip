const router=require('express').Router();
const Signup=require('../models/user');
const Login=require('../models/user');
const Hotel=require('../models/hotel');
const Available=require('../models/available');
const Book=require('../models/book');
const Packages=require('../models/addpackages');
const multer=require('multer');
var fs = require('fs');
var path = require('path');
const adminLogin=require('../models/admin');
const adminSignup=require('../models/admin')


// const Storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
// const upload = multer({ storage: Storage }).single('testImage');


router.post('/signup',(req,res)=>{
  const signup=new Signup({
    FirstName:req.body.FirstName,
   LastName:req.body.LastName,
   Email:req.body.Email,
   Password:req.body.Password,
   ConfirmPassword:req.body.ConfirmPassword
  });
  signup.save()
    .then((_)=>{
        res.json({success:true,message:"account has been created"});
    })
    .catch((err)=>{
        if(err.code==11000){
            return res.json("email aleady exist");
        }
        res.json({err});
    });

     
});


router.get('/signup',(req,res)=>{
    Signup.find((err,val)=>{
        if(err){
            console.log("err hai")
        }
        else{
            res.json(val)
        }
    })
  });



router.post('/login',(req,res)=>{
    const login=new Login ({
        Email:req.body.Email,
        Password:req.body.Password
    });
    login.save()
    .then((_)=>{
        res.json({success:true,message:"login successful"});
        
    })
    .catch((err)=>{
        res.json({success:false,message:err});
    });
});


router.post('/admin-signup',(req,res)=>{
    const adminsignup=new adminSignup({
      FirstName:req.body.FirstName,
     LastName:req.body.LastName,
     Email:req.body.Email,
     Password:req.body.Password,
     ConfirmPassword:req.body.ConfirmPassword
    });
    adminsignup.save()
      .then((_)=>{
          res.json({success:true,message:"account has been created"});
      })
      .catch((err)=>{
          if(err.code==11000){
              return res.json("email aleady exist");
          }
          res.json({err});
      });
  
       
  });
  
  
  router.get('/admin-signup',(req,res)=>{
      adminSignup.find((err,val)=>{
          if(err){
              console.log("err hai")
          }
          else{
              res.json(val)
          }
      })
    });
  
  
  
  router.post('/admin-login',(req,res)=>{
      const adminlogin=new  adminLogin ({
          Email:req.body.Email,
          Password:req.body.Password
      });
      adminlogin.save()
      .then((_)=>{
          res.json({success:true,message:"login successful"});
          
      })
      .catch((err)=>{
          res.json({success:false,message:err});
      });
  });



router.post('/hotel',(req,res)=>{
    const hotel=new Hotel({
        city:req.body.city,
        checkIn:req.body.checkIn,
        checkOut:req.body.checkOut
    });
    hotel.save()
    .then((_)=>{
        res.json({success:true,message:"Welcome to booking site"});
    })
    .catch((err)=>{
        res.json({success:false,message:err});
    });
});

router.post('/available',(req,res)=>{
    const available=new Available ({
       name:req.body.name,
      mobileNo:req.body.mobileNo,
      email:req.body.email,
      number:req.body.number
    });
    available.save()
    .then((_)=>{
        res.json({success:true,message:"Booked"});
        
    })
    .catch((err)=>{
        res.json({success:false,message:err});
    });
});

router.get('/available',(req,res)=>{
    Available.find((err,val)=>{
        if(err){
            console.log("err hai")
        }
        else{
            res.json(val)
        }
    })
  
});

router.post('/book',(req,res)=>{
    const book=new Book ({
       name:req.body.name,
      mobileNo:req.body.mobileNo,
      email:req.body.email,
      number:req.body.number
    });
   book.save()
    .then((_)=>{
        res.json({success:true,message:"Booked"});
        
    })
    .catch((err)=>{
        res.json({success:false,message:err});
    });
});

router.post('/packages',(req,res)=>{
    const packages=new Packages({
      City:req.body.City,
    //   Image: {
    //     data: Buffer,
    //     contentType: 'image/jpg'
    // },
    Description:req.body.Description,
    });
    packages.save()
      .then((_)=>{
          res.json({success:true,message:"packages added"});
      })
      .catch((err)=>{
        res.json({success:false,message:err});
    });
  
       
  });
  
  
  router.get('/packages',(req,res)=>{
      Packages.find((err,val)=>{
          if(err){
              console.log("err hai")
          }
          else{
              res.json(val)
          }
      })
    });




module.exports=router;