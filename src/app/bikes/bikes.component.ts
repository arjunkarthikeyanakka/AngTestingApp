import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikes:Product[]=[];

  constructor(private dsObj:BikeService){
    
  }

  ngOnInit(){
    this.bikes=this.dsObj.getBikesData();  
  }


}
