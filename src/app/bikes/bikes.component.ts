import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';
import { Product } from '../models/product.model';
import { Observable, Subscriber } from 'rxjs';


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
    this.dsObj.getBikesData().subscribe(
      data=>{
        this.bikes=data;
      },
      err=>{
        console.log("error is ",err)
      }
    )  
  }


}
