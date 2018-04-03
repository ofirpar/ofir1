import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../Services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  get postsList(){
    return this.postSrv.postsList;
  }

  constructor(private postSrv:PostsService) { }

  ngOnInit() {
    this.postSrv.getPosts();
  }

}
