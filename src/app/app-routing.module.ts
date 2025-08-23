import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsWeMadeComponent } from './products-we-made/products-we-made.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ProductsComponent } from './admin/products/products.component';
import { UserProductComponent } from './user-product/user-product.component';
const routes: Routes = [{
  path:'',component:HomeComponent
},
{path:'user-products',component:UserProductComponent},
{path:'product', component:ProductsComponent},
{path:'adminLogin', component:AdminComponent},
{path:'product-we-made',component:ProductsWeMadeComponent},
{path:'aboutUs',component:AboutUsComponent},
{path:'contactUs',component:ContactUsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
