const express=require("express");
const router=express.Router();
const Product=require("../admin-models/productModel")
const multer = require('multer');
router.get("/",async(req,res)=>{
  try{
    const products=await Product.find();
    res.status(200).send(products);
  }catch(err){
     res.status(500).send(err);
  }
    
})
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });
router.post('/', upload.array('productImages', 10), async (req, res) => {
  try {
    const imagePaths = req.files.map(file => file.path);
    const { productName, productCategory, price } = req.body;

    const newProduct = new Product({
      productName,
      productCategory,
      price,
      productImages: imagePaths
    });

    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.delete("/:id",async(req,res)=>{
  const id=req.params.id;
  try{
   const deleteProduct=await Product.findByIdAndDelete(id,{});
  res.status(200).send(deleteProduct)
  }catch(err){
   res.status(400).send(err);
  }
})
router.get('/:id',async(req,res)=>{
  try{
  const product=await Product.findById(req.params.id);
  res.status(200).send(product);
  }catch(err){
  res.status(400).send(err);
  }

})
router.put('/:id',async(req,res)=>{
  try{
  const product=req.body;
  const updateProduct=await Product.findByIdAndUpdate(req.params.id,product);
   res.status(200).send("updated");
  }catch(err){

  }
})

module.exports=router;