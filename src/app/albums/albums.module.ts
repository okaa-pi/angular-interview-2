import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumTileComponent } from './album-tile/album-tile.component';
import { PhotosComponent } from './photo/photos.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumDetailsComponent,
    AlbumTileComponent,
    PhotosComponent
  ],
  exports: [
    AlbumsComponent
  ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatGridListModule,
        MatCardModule,
        MatRippleModule
    ]
})
export class AlbumsModule { }
