const express=require('express');
const app=express();
const db=require('./db')
const PORT = process.env.PORT || 10000;
const cors=require("cors");
const path = require('path');
const bodyparder=require("body-parser")
const ProductController=require("./admin/admin-controller/productController")
const ProductCategoryController=require("./admin/admin-controller/productCategoryController")
app.use(cors());
app.use(bodyparder.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT,(()=>{
    console.log("app is ruuning in port 3000");
}));
app.use('/admin',ProductController);
app.use('/AddProductCategory',ProductCategoryController)
