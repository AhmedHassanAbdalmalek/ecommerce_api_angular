import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { CarcategoryComponent } from './carcategory/carcategory.component';
import { MobilecategoryComponent } from './mobilecategory/mobilecategory.component';
import { HttpClientModule } from '@angular/common/http';
import { CardetailsComponent } from './cardetails/cardetails.component';
import { RouterModule } from '@angular/router';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductlistComponent } from './productlist/productlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    CartComponent,
    RegisterFormComponent,
    CarcategoryComponent,
    MobilecategoryComponent,
    CardetailsComponent,
    UpdateproductComponent,
    DashboardComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
