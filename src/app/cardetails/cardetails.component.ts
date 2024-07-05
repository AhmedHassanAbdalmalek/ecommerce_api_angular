import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetproductService } from '../api/getproduct.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent {
  items:any=[];
 

  constructor( private route: ActivatedRoute,private product:GetproductService) {}
  ngOnInit(): void {
    let id_product=this.route.snapshot.paramMap.get('id');
    this.product.get_productdetails(id_product).subscribe((data:any) => {
      for(let product of data){
        // product.newid=btoa(product.product_id);
         
         product.product_image="http://localhost/petra/API/ecommerce%20project"+product.product_image
 
       }
      this.items = data[0];
    })
  }

}
