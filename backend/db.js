const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/ShriShyamSteel").
then(()=>{
    console.log("database connected successfully");
}).catch((err)=>{
    console.log(err)
})
module.exports=mongoose;