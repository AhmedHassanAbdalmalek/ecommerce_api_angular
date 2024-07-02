import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetproductService } from '../api/getproduct.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form : FormGroup
message:any=''
constructor(private apiService:GetproductService,private formbuilder:FormBuilder,private router: Router){
  this.form=this.formbuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })}
  get f(){
    //console.log(this.form.controls)
    return this.form.controls
  }
  submit(){
    console.log(this.form.value.email)
    // if(this.form.value.email == 'admin@gmail.com' && this.form.value.password=='1234'){
       // console.log(this.formlogin.value);
    this.apiService.loginuserr(this.form.value)
    .subscribe({ next:(res:any)=>{
      console.log(res);
       if(res['messege'] == "login failed")
       {
        this.message="login failed";
       // console.log(this.message);
       }
       else{
          localStorage.setItem('user-Data-login',JSON.stringify(res['user']))
        this.router.navigate(['/home'])
        
        .then(() => {
          window.location.reload();
        });
       }
    }});
      this.message="login successfully"
      // this.router.navigate(['/home']).then(()=>{
      //   window.location.reload()
      // })
    // }else{
    //   this.message="login falied"
  
    // }
  
  }
 

}
