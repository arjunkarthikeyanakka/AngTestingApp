import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from '../app/models/post.model'
import { Users } from './models/users.model';

@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  constructor(private hc:HttpClient) { }

  getPosts():Observable<any[]>{
    return this.hc.get<any[]>('https://jsonplaceholder.typicode.com/users')
  }

  getUsers():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/hall_of_fame')
  }

  getUsersById(id):Observable<Users[]>{
    return this.hc.get<Users[]>('http://localhost:3000/hall_of_fame/'+id);
  }


}
