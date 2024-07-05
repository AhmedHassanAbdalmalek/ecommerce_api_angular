import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetproductService } from '../api/getproduct.service';
import { validmatchpassword } from '../confirmpassvalidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form : FormGroup
  
  message:any='';
  
  constructor(private product: GetproductService ,private formbuilder:FormBuilder,private router: Router){
    this.form=this.formbuilder.group({
    //  mail:['',[Validators.required,Validators.email]],
    username:['',[Validators.required]],
   email:['',[Validators.required]],
    password:['',[Validators.required]],
      
      usertype:['',[Validators.required]]
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
    submit(){
     
 // console.log(this.form.value);
    this.product.insertuser(this.form.value).subscribe((data:any) => {
      console.log(data);
      if(data){
        this.message=data['message'];

      }
      
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
    // mcheck='admin@gmail.com';
    // pcheck ='123456';



   
      //  checkmatchpassword (form:AbstractControl):ValidationErrors|null {
       
      //   let pass1= form.get('pass')?.value;
      //   let pass2= form.get('cpass')?.value;
       
       
      //  return (pass1===pass2)?null:{mismatch:true}
        
      // }
      // checkmatchpassword (form:FormGroup) {
       
      //   const pass1= form.get('pass');
      //   const pass2= form.get('cpass');
       
      //  if(pass1&&pass2&&pass1.value!==pass2.value){pass2.setErrors({mismatch:true})}
      //  else{
      //   pass2?.setErrors(null);

      //  }
      //  return null;
      
        
      // }
     

}
