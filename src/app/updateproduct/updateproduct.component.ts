import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetproductService } from '../api/getproduct.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent {
  message:any;
  form : FormGroup;
  constructor(private route: ActivatedRoute,private product: GetproductService ,private formbuilder:FormBuilder,private router: Router){
    this.form=this.formbuilder.group({
    
    description:['',[Validators.required]],
    price:['',[Validators.required]],
      
    category:['',[Validators.required]]
     
    }
      
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
    submit(){
     
 // console.log(this.form.value);
 let id_product=this.route.snapshot.paramMap.get('id');
 console.log(id_product);
 console.log(this.form.value);
    this.product.updateproduct(this.form.value,id_product).subscribe((data) => {
      // if(data){this.message="updated successfully"}
      // else{this.message="updated failed"}
      console.log(data);
    
      const myObj = JSON.stringify(data);
      console.log(myObj );
     this.message=myObj;
      
    })
 
      //var a=document.getElementById("checkpass")?.innerText;
      //console.log(this.form.value.mail)
      
      //   if(this.form.value.mail == this.mcheck && this.form.value.pass== this.pcheck){
      //   this.message="login successfully"
      //   this.router.navigate(['/home']).then(()=>{
      //     window.location.reload()
      //   })
      // }else{
      //   this.message="login falied"
    
      // }
      
  
    }

}
