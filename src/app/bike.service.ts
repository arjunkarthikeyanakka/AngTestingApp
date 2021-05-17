import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private hc:HttpClient) { }

  getBikesData():Observable<Product[]>{  //always write return type since this is a ts file
    return this.hc.get<Product[]>("assets/cars.json");
  };
  
}
