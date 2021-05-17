import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Product } from '../models/product.model';
import { Observable, Subscriber } from 'rxjs';



@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit  {

  cars:Product[]=[];

  constructor(private dsObj:CarService){
    
  }

  ngOnInit(){
    this.dsObj.getCarsData().subscribe(
      data=>{
        this.cars=data;
      },
      err=>{
        console.log("error is ",err);
      }
    ) 
  }

    

}
