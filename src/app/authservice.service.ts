import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }
  roleAs:any;

  IsLoggedIn(){
    return !!localStorage.getItem('user-Data-login');
  }
  getRole() {
    var user_data: any =localStorage.getItem('user-Data-login');
    user_data= JSON.parse(user_data);
    this.roleAs=user_data['Role_name'];
    console.log(this.roleAs);
    return this.roleAs;
  }
}
