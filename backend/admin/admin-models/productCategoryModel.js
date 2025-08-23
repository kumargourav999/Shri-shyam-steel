const mongoose=require('mongoose')
const productcategory=mongoose.model('productCategory',{
    productCategory:{
        type:String
    }
})
module.exports=productcategory;