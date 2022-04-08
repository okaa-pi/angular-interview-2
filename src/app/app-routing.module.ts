import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlbumsComponent} from './albums/albums/albums.component';
import {AlbumDetailsComponent} from './albums/album-details/album-details.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent
  },
  {
    path: ':id',
    component: AlbumDetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
