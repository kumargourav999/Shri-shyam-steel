import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsWeMadeComponent } from './products-we-made/products-we-made.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const routes: Routes = [{
  path:'home',component:HomeComponent
},
{path:'product-we-made',component:ProductsWeMadeComponent},
{path:'aboutUs',component:AboutUsComponent},
{path:'contactUs',component:ContactUsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
