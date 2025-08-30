const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://kumargourav:kumar123@cluster0.dxvytbg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").
then(()=>{
    console.log("database connected successfully");
}).catch((err)=>{
    console.log(err)
})
module.exports=mongoose;
