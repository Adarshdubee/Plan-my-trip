const { create } = require('mocha/lib/suite');

const mongoose=require('mongoose');

const schema=mongoose.Schema;

const packagesSchema=new schema({
   City:{type:String,unique:true},
   // Image:{data:Buffer,contentType:String},
  Description:{type:String,unique:true},
   created_at:{type:Number,default:Date.now().valueOf()},
   updated_at:{type:Number,default:Date.now().valueOf()},
});

module.exports=mongoose.model('Packages',packagesSchema);