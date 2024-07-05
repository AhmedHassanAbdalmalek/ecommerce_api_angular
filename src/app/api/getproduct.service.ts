import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetproductService {
  baseURL="http://localhost/petra/API/ecommerce%20project"

  constructor(private http: HttpClient) {}
  get_product()
  {
    return this.http.get<[]>('http://localhost/petra/API/ecommerce project/getproduct.php');
  }
  get_carproduct()
  {
    return this.http.get<[]>('http://localhost/petra/API/ecommerce project/getcarproduct.php');
  }
  get_productdetails(id:any)
  {
    return this.http.get<[]>('http://localhost/petra/API/ecommerce project/getproduct.php?cond=product_id='+id);
  }
  insertuser(data:any)
  {
     const datajson=JSON.stringify(data);
    return this.http.post('http://localhost/petra/API/ecommerce project/insertuser.php',datajson);
  }
  updateproduct(data:any,id:any)
  {
     const datajson=JSON.stringify(data);
     console.log( datajson);
    return this.http.put('http://localhost/petra/API/ecommerce project/updateuser.php?id='+id,datajson);
  }
  loginuserr(data:any){
    const body=JSON.stringify(data);
    console.log(body);
    return this.http.post('http://localhost/petra/API/ecommerce project/login.php',body);
  }
  insertproduct(data:any)
  {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    // const datajson=JSON.stringify(data);
    return this.http.post('http://localhost/petra/API/ecommerce project/insertproduct.php',data,{headers: headers})
    .pipe(map((res: any) => {
      
      return res;
      }));
  }
  deleteproduct(id:any)
  {
    //  const datajson=JSON.stringify(i);
    return this.http.delete('http://localhost/petra/API/ecommerce project/deleteproduct.php?id='+id);
  }
}
