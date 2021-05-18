import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakedataService } from '../fakedata.service';
import { Users } from '../models/users.model';

@Component({
  selector: 'app-user',
  templateUrl:'./user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  myUsers:any=[];

  constructor(private dsObj:FakedataService,private router:Router) { }

  ngOnInit(): void {
    this.dsObj.getUsers().subscribe(
      usersData => {
        this.myUsers=usersData;
      },
      err => {
        console.log("error is ",err)
      }
    )
  }

  onSelected(id:string){
    this.router.navigateByUrl('user/'+id);
    //console.log('navigated to user/:'+id)
  }

}
