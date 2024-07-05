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
    file:[''],
      fileSource:[''],
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
    public  onFileChange(event:any){
      console.log(event.target.files)
         if (event.target.files.length > 0) {
          const fileee = event.target.files[0];
          this.form.patchValue({
            fileSource: fileee
          });
        }
    }
    ngOnInit(): void {
      this.product.get_product().subscribe((data:any) => {
        console.log(data);
        for(let product of data){
          // product.newid=btoa(product.product_id);
           
         product.product_image="http://localhost/petra/API/ecommerce%20project"+product.product_image;
   
         }
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
      console.log(this.form.value)
   
    const formData = new FormData();
    formData.append('fileSource',this.form.controls['fileSource'].value);
    formData.append('description',this.form.controls['description'].value);
    formData.append('price',this.form.controls['price'].value);
    formData.append('category_id_prod_fk',this.form.controls['category_id_prod_fk'].value);
   
    formData.append('stock',this.form.controls['stock'].value);
    formData.append('file',this.form.controls['file'].value);
    

     
 // console.log(this.form.value);
    this.product.insertproduct(formData).subscribe((res:any) => {
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
