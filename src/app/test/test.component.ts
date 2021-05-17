import { Component, OnInit } from '@angular/core';
import { FakedataService } from '../fakedata.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  myPosts:any=[];

  constructor(private dsObj:FakedataService) { }

  ngOnInit(): void {
    this.dsObj.getPosts().subscribe(
      postsData => {
        //assign posts
        this.myPosts=postsData;
      },
      err => {
        console.log("error is ",err);
      }
    )
  }

}
