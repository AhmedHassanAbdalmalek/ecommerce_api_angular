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
      this.items = data[0];
    })
  }

}
