import { Injectable, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})


export class DataService {
 
  //inject HTTPClient service object
  constructor(private hc:HttpClient) {

  }

  getMobilesData():Observable<Product[]>{  //always write return type since this is a ts file
    //http get
    return this.hc.get<Product[]>("http://localhost:3000/mobiles")
  }; 

}
