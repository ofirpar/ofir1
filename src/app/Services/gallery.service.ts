import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Image } from '../models/image.class';



@Injectable()
export class GalleryService {
//  "title": "accusamus beatae ad facilis cum similique qui sunt",
// "url": "http://placehold.it/600/92c952",
// "thumbnailUrl": "http://placehold.it/150/92c952"

  imagesList: Array<Image>
  constructor(private http: Http) {

   }


   getImages(){
     this.http.get('https://jsonplaceholder.typicode.com/album/1/photos')
     .toPromise().then(function(response){
      if (response){
        let result = response.json();
        console.log('gallery response:', result);
        this.imagesList = result;
      }
     }.bind(this));
   }
}
