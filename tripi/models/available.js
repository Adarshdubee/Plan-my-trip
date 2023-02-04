const mongoose=require('mongoose');

const schema=mongoose.Schema;

const availableSchema=new schema({
  name:{type:String},
  mobileNo:{type:Number},
  email:{type:String,unique:true},
  number:{type:Number}
});

module.exports=mongoose.model('Available',availableSchema);