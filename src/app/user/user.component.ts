import { Component, OnInit } from '@angular/core';
import { FakedataService } from '../fakedata.service';
import { Users } from '../models/users.model';

@Component({
  selector: 'app-user',
  templateUrl:'./user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  myUsers:any=[];

  constructor(private dsObj:FakedataService) { }

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

}
