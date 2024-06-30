import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetproductService {

  constructor(private http: HttpClient) {}
  get_product()
  {
    return this.http.get<[]>('http://localhost/petra/API/ecommerce project/getproduct.php');
  }
  get_productdetails(id:any)
  {
    return this.http.get<[]>('http://localhost/petra/API/ecommerce project/getproduct.php?cond=product_id='+id);
  }
  insertproduct(data:any)
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
}
