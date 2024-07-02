import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetproductService } from '../api/getproduct.service';

@Component({
  selector: 'app-carcategory',
  templateUrl: './carcategory.component.html',
  styleUrls: ['./carcategory.component.css']
})
export class CarcategoryComponent {
  // items=[{cardimage:'assets/c.jpg',card_name:"bmw",description:'egypt',price:50,date:new Date()},
  // {cardimage:'assets/b.jpg',card_name:"mercedes",description:'sauid',price:1000,date:new Date()},
  // {cardimage:'assets/j.jpg',card_name:"hyndai",description:'strong speed',price:200,date:new Date()},
  // {cardimage:'assets/b.jpg',card_name:"128",description:'strong amazing',price:200000,date:new Date()}];
  items:any=[];

  constructor(private product: GetproductService ,private router:Router) {}
  ngOnInit(): void {
    this.product.get_product().subscribe((data) => {
      console.log(data);
      this.items = data;
      // var user_data: any =localStorage.getItem('user-Data-login');
      //   user_data= JSON.parse(user_data);
      //   let id=user_data['id'];
      //      console.log(id);
    })
  }

  
  
}
