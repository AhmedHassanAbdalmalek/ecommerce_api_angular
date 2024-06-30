import { Component } from '@angular/core';
import { GetproductService } from '../api/getproduct.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


 

  
  title="our products";
  items=[{cardimage:'assets/c.jpg',card_name:"bmw",description:'egypt',price:50000,date:new Date()},
  {cardimage:'assets/b.jpg',card_name:"mercedes",description:'sauid',price:100000,date:new Date()},
  {cardimage:'assets/j.jpg',card_name:"hyndai",description:'strong speed',price:200000,date:new Date()}];

}
