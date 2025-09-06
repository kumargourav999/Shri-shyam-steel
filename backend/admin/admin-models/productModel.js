const mongoose=require('mongoose');
const Product=mongoose.model("product",{
   productName:{
    type:String,
    required:true
   },
   productDescription:{
    type:String,
    required:true
   },
   productCategory:{
    type:String,
    required:true
   },
   productImages:{
    type:[String],
    required:true
   },
   price:{
    type:Number,
   },
     unit:{
      type:String
   }
   
})
module.exports=Product;
