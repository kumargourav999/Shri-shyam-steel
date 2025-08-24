import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
   //url="http://localhost:3000/admin"
   private url = "http://shri-shyam-steel2.onrender.com/admin";
   url1="http://localhost:3000/AddProductCategory"

   
  getAllProduct():Observable<any[]>{
    return this.http.get<any[]>(`${this.url}`,{responseType:"json"})
  }
  createProduct(data:any){
    return this.http.post(`${this.url}`,data,{responseType:"text"});
  }
  deleteProduct(id:any){
    return this.http.delete(`${this.url}/${id}`,{responseType:'json'});
  }
  editProduct(id:any,product:any){
     return this.http.put(`${this.url}/${id}`,product,{responseType:'text'});
  }
  getProductId(id:any){
    return this.http.get(`${this.url}/${id}`,{responseType:'json'})
  }
  addCategory(category:any){
  return this.http.post(`${this.url1}`,category,{responseType:'text'})
  }
  getCategory(){
    return this.http.get(`${this.url1}`,{responseType:"json"})
  }
}
