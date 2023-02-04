const mongoose=require('mongoose');

const schema=mongoose.Schema;

const hotelSchema=new schema({
  city:{type:String},
   checkIN:{type:String},
  checkOut:{type:String,unique:true}
});

module.exports=mongoose.model('Hotel',hotelSchema);