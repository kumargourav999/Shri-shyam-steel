const express=require('express');
const router=express.Router();
const ProductCategory=require('../admin-models/productCategoryModel');
router.post('/',async(req,res)=>{
       try{
            
          
        // extract category string
        const addCategory = new ProductCategory({ productCategory:req.body.category }); // ✅ pass to schema
        await addCategory.save();
          res.send("category added successfully");
        
       }catch(err){
             res.status(500).send(err) 
       }
})
router.get("/" ,async(req,res)=>{
      try{

      
      const category=await ProductCategory.find();
      res.status(200).send(category);
      }catch(err){
            res.status(400).send(err)
      }
})
router.delete('/:id',async(req,res)=>{
      try{
      await ProductCategory.findByIdAndDelete(req.params.id);
      res.status(200).send("category deleted succssfully")
      }catch(err){
        res.send(err);
      }
})
module.exports=router;
