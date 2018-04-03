import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from '../models/post.class';

@Injectable()
export class PostsService {
  
  postsList: Array<Post>
  constructor(private http: Http) {

   }
   getPosts(){
     this.http.get('https://jsonplaceholder.typicode.com/posts')
     .toPromise().then(function(response){
      if (response){
        let result = response.json();
        console.log('posts response:', result);
        this.postsList = result;
      }
     }.bind(this));
   }
}