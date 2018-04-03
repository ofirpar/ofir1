import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PostsComponent } from './pages/posts/posts.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  { path: 'Home', component: HomeComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Posts', component: PostsComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
