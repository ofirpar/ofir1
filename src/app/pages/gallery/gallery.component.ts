import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../Services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  get imagesList(){
    return this.gallerySrv.imagesList
  }

  constructor(private gallerySrv: GalleryService) { }

  ngOnInit() {
    this.gallerySrv.getImages();
  }

}
