import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { DataService } from '../data.service';

import { Product } from '../models/product.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  
  mobiles:Product[]=[];

  //inject obj of DataService class
  constructor(private dsObj:DataService){
      
  }
  
  ngOnInit(){
      //obj initialisation logic
      this.dsObj.getMobilesData().subscribe(
        data=>{
          this.mobiles=data;
        },
        err=>{
          console.log("error is ",err)
        }
      );  
    }
  

}
