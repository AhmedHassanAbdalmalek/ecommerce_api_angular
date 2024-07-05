import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetproductService } from '../api/getproduct.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  items:any=[];

  constructor(private product: GetproductService ,private router:Router) {}
  ngOnInit(): void {
    this.product.get_product().subscribe((data:any) => {
      console.log(data);
      for(let product of data){
       // product.newid=btoa(product.product_id);
        
        product.product_image="http://localhost/petra/API/ecommerce%20project"+product.product_image

      }
      this.items = data;
      // var user_data: any =localStorage.getItem('user-Data-login');
      //   user_data= JSON.parse(user_data);
      //   let id=user_data['id'];
      //      console.log(id);
    })
  }


}
