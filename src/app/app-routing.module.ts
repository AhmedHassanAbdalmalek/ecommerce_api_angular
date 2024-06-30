import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarcategoryComponent } from './carcategory/carcategory.component';
import { CardetailsComponent } from './cardetails/cardetails.component';

import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilecategoryComponent } from './mobilecategory/mobilecategory.component';
import { RegisterComponent } from './register/register.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent},
  {path:'contact',component:ContactComponent},
  {path:'carcategory',component:CarcategoryComponent},
  {path:'mobilecategory',component:MobilecategoryComponent},
  {path:'getproduct/:id',component:CardetailsComponent} ,
  {path:'updateproduct/:id',component:UpdateproductComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
