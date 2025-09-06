import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { withNoHttpTransferCache } from '@angular/platform-browser';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit{
  ngOnInit(){
    this.getAllProducts();
    this.getAllCategory();
  }
products:any[]=[]
  showEditCategory=false;
allCategory:any=[];
productCategory:any={
  category:"",
};
   imageBaseUrl = 'https://shri-shyam-steelok94311.onrender.com/'; 
  getAllProducts(){
    this.productService.getAllProduct().subscribe({
      next:(res)=>{
        console.log(res);
        this.products=res;

      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  showForm = false;
editmode=false;
showInputCategory=false;
  product: {
    productName: string;
    productDescription:string,
    productCategory: string;
    price: number | null;
    unit:string,
    productImages: string[];
  } = {
    productName: '',
    productDescription:'',
    productCategory: '',
    price: null,
    unit:'',
    productImages: []
  };
  selectedFiles: File[] = [];

  constructor(private productService: ProductService) {}

  onAddClick() {
    this.showForm = true;
  }

  onFileChange(event: any) {
    this.selectedFiles = Array.from(event.target.files);
  }

  onSubmit() {
    const formData = new FormData();
   formData.append('productName', this.product.productName);
     formData.append('productDescription', this.product.productDescription);
    
    formData.append('productCategory', this.product.productCategory);
    formData.append('price', this.product.price?.toString() || '');
     formData.append('unit', this.product.unit);

    this.selectedFiles.forEach((file) => {
      formData.append('productImages', file);
    });

    this.productService.createProduct(formData).subscribe({
      next: (res) => {
        console.log('Product saved:', res);
        alert('Product uploaded successfully!');
        this.getAllProducts()
        this.resetForm();
      },
      error: (err) => {
        console.error('Upload failed:', err);
        
      }
    });
  }
  getproduct:any=[];
  onEdit(product:any){
    
    this.showForm=true;
    this.editmode=true;
    this.productService.getProductId(product._id).subscribe({
      next:(data)=>{
       
        this.getproduct=data;;
        this.product=this.getproduct;
        console.log("jii",this.product);
      }
    });

  }

   onClickEdit(){
     this.productService.editProduct(this.getproduct._id,this.product).subscribe({
      next:(res)=>{
        if(res){
          this.getAllProducts();
          this.resetForm();
          
        }
      }
     });
     
   }

  onDelete(id:any){
  
    this.productService.deleteProduct(id).subscribe({
      next:(res)=>{
        console.log(res);
      
        this.getAllProducts();
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  resetForm() {
    this.product = {
     productName: '',
      productDescription:'',
      productCategory: '',
      unit:'',
      price: null,
      productImages: []
    };
    this.selectedFiles = [];
    this.showForm = false;
    this.editmode=false;
  }
  addCatogory(){
   this.showInputCategory=true;
  }
  submitCategory(){
   
    this.productService.addCategory(this.productCategory).subscribe({
      next:(res)=>{
       alert("Category Added Successfully");
         alert("Category Added Successfully");
        this.showInputCategory=false;
        this.getAllCategory();
      }
    })
  }
  getAllCategory(){
    this.productService.getCategory().subscribe({
      next:(res)=>{
        this.allCategory=res;
        console.log(this.allCategory)
      }
    })
  }
  editCatogory(){
    this.showEditCategory=true;
  }
  onDeleteCategory(id:any){
    this.productService.deleteCategory(id).subscribe(
      {
        next:(res)=>{
         alert(res);
         this.getAllCategory();
        }
      }
    );
  }
}
