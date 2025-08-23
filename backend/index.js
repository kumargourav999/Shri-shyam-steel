const express=require('express');
const app=express();
const db=require('./db')
const cors=require("cors");
const path = require('path');
const bodyparder=require("body-parser")
const ProductController=require("./admin/admin-controller/productController")
const ProductCategoryController=require("./admin/admin-controller/productCategoryController")
app.use(cors());
app.use(bodyparder.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.listen(3000,(()=>{
    console.log("app is ruuning in port 3000");
}));
app.use('/admin',ProductController);
app.use('/AddProductCategory',ProductCategoryController)