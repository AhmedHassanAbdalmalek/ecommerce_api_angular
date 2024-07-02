import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';
@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate {
  constructor(private auth:AuthserviceService,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree|Promise<boolean | UrlTree>
  |boolean|UrlTree
    {
      let url:string=state.url;
    return this.checkUserLogin(next,url);
  }
  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.auth.IsLoggedIn()) {
      const userRole = this.auth.getRole();
      console.log(userRole);
      if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
        if(userRole =='admin'){
          this.router.navigate(['dashboard']);
        }else {
          this.router.navigate(['carcategory']);
        }
        return false;
      }
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
    
   
  }


