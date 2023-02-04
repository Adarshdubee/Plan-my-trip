const { create } = require('mocha/lib/suite');
const mongoose=require('mongoose');

const schema=mongoose.Schema;

const adminsignupSchema=new schema({
    FirstName:{type:String},
   LastName:{type:String},
   Email:{type:String,unique:true},
   Password:{type:String,required:true},
   ConfirmPassword:{type:String,required:true},
   created_at:{type:Number,default:Date.now().valueOf()},
   updated_at:{type:Number,default:Date.now().valueOf()},
});
const adminloginSchema=new schema({
    Email:{type:String,unique:true},
    Password:{type:String,required:true},
    created_at:{type:Number,default:Date.now().valueOf()},
   updated_at:{type:Number,default:Date.now().valueOf()},
});



module.exports=mongoose.model('adminSignup',adminsignupSchema);
module.exports=mongoose.model('adminLogin',adminloginSchema);