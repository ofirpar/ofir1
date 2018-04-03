import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PostsComponent } from './pages/posts/posts.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryService } from './Services/gallery.service';
import { PostsService } from './Services/posts.service';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    GalleryComponent,
    PostsComponent,
    HomeComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GalleryService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
