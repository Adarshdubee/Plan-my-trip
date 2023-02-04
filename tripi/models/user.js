const { create } = require('mocha/lib/suite');
const mongoose=require('mongoose');

const schema=mongoose.Schema;

const signupSchema=new schema({
    FirstName:{type:String},
   LastName:{type:String},
   Email:{type:String,unique:true},
   Password:{type:String,required:true},
   ConfirmPassword:{type:String,required:true},
   created_at:{type:Number,default:Date.now().valueOf()},
   updated_at:{type:Number,default:Date.now().valueOf()},
});
const loginSchema=new schema({
    Email:{type:String,unique:true},
    Password:{type:String,required:true},
    created_at:{type:Number,default:Date.now().valueOf()},
   updated_at:{type:Number,default:Date.now().valueOf()},
});



module.exports=mongoose.model('Signup',signupSchema);
module.exports=mongoose.model('Login',loginSchema);

