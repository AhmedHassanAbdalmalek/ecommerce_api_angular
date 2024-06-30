import { Component } from '@angular/core';

@Component({
  selector: 'app-mobilecategory',
  templateUrl: './mobilecategory.component.html',
  styleUrls: ['./mobilecategory.component.css']
})
export class MobilecategoryComponent {
  items=[{cardimage:'assets/iphone.png',card_name:"nokia",description:'good phone strong',price:500,date:new Date()},
  {cardimage:'assets/sumsung.jpg',card_name:"sumsung",description:'fast and amazing',price:2000,date:new Date()},
  {cardimage:'assets/nokia.jpg',card_name:"iphone",description:'more size and ram ',price:200,date:new Date()},
  {cardimage:'assets/sumsung.jpg',card_name:"motorla",description:'fast speed',price:7000,date:new Date()}];


}
