import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(private route:Router){
    
  }
  check:any;
  checkadmin1:any;
 
  
  islogined(){

    return this.route.url=='/login' || this.route.url=='/register';


  }
   logout(){
    localStorage.removeItem('user-Data-login')
    this.route.navigate(['/login'])
    .then(() => {
      window.location.reload();
    });
  }

 
  checklogin()
  {
    var user_data: any =localStorage.getItem('user-Data-login');
    if(user_data){
      user_data= JSON.parse(user_data);
      let id=user_data['id'];
      console.log(id);
      if(id)
      {this.check=true;}
     
      
        return this.check;
    }else{
      return false
    }

  };
  checkadmin(){
    var user_data: any =localStorage.getItem('user-Data-login');
    if(user_data){
      user_data= JSON.parse(user_data);
      let rolename=user_data['Role_name'];
      
      if(rolename=='admin')
      {
        //this.checkadmin1=true;
       return this.route.url!='/dashboard';}
     
      
        return this.checkadmin1;
    }else{
      return false
    }

  };

  

  

}
