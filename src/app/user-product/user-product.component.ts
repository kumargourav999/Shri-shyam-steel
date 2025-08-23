import { Component, OnInit,HostListener } from '@angular/core';
import { ProductService } from '../admin/product.service';
@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.css']
})
export class UserProductComponent implements OnInit{
  constructor(private productservice:ProductService){

  }
  imageBaseUrl = 'http://localhost:3000/'; 
  allproducts: any[] = [];
   showPreview = false;
  selectedImage: string = '';
  currentIndex = 1;
  productimagelist:any[]=[];
  ngOnInit(): void {
      this.productservice.getAllProduct().subscribe({
        next:(res)=>{
             this.allproducts=res;
             alert(JSON.stringify(this.allproducts));
        }
      })
  }
   openPreview(imageUrl: string,product:any) {
    this.productimagelist=product.productImages;
    this.currentIndex=0;
    this.selectedImage = imageUrl;
    this.showPreview = true;

  }

  closePreview() {
    this.showPreview = false;
    this.selectedImage = '';
  }
  prevImage(){
    if(this.currentIndex>0){
 this.currentIndex= this.currentIndex-1;
 this.selectedImage=`http://localhost:3000/${this.productimagelist[this.currentIndex]}`;
    }

  }
    nextImage(){
     
      if(this.currentIndex<this.productimagelist.length-1){
       this.currentIndex= this.currentIndex+1;
       this.selectedImage=`http://localhost:3000/${this.productimagelist[this.currentIndex]}`;
      }
    
  }
}
