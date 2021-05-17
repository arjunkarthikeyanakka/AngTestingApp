import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private hc:HttpClient) { }

  getCarsData():Observable<Product[]>{  //always write return type since this is a ts file
    return this.hc.get<Product[]>("assets/cars.json");
  };


}
