import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetproductService } from '../api/getproduct.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  items:any=[];
  rolename:any;
  form : FormGroup
  
  message1:any='';
  
  constructor(private product: GetproductService ,private formbuilder:FormBuilder,private router: Router){
    this.form=this.formbuilder.group({
    //  mail:['',[Validators.required,Validators.email]],
    description:['',[Validators.required]],
    price:['',[Validators.required]],
      
    category_id_prod_fk:['',[Validators.required]]
    ,stock:['',[Validators.required]],
    product_image:['',[Validators.required]]
     // cpass:['',[Validators.required]]
    }
      // ,{Validators :this.checkmatchpassword}
      )}
    get f(){
      //console.log(this.form.controls)

      return this.form.controls
    }
    // get pass(){
    //   //console.log(this.form.controls)
    //   return this.form.get('pass')
    // }
    // get cpass(){
    //   //console.log(this.form.controls)
    //   return this.form.get('cpass')
    // }
    ngOnInit(): void {
      this.product.get_product().subscribe((data) => {
        console.log(data);
        this.items = data;
        var user_data: any =localStorage.getItem('user-Data-login');
          user_data= JSON.parse(user_data);
          this.rolename=user_data['username'];
             
      })

  
              }

              deleteproduct(id:any){
                this.product.deleteproduct(id).subscribe((res:any) => {
              })};
    submit(){
     
 // console.log(this.form.value);
    this.product.insertproduct(this.form.value).subscribe((res:any) => {
      //console.log(res[0].message);
    
       if(res[0].message=="productinserted")
       {
      this.message1="product inserted successfully"
       }else{
        this.message1="product inserted failed"
         
       }
    })
    
 
      //var a=document.getElement

  
  


}}
