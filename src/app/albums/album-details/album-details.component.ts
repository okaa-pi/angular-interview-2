import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Photo} from '../../models/photo.model';
import {PhotosService} from '../../services/photos.service';
import {Album} from '../../models/album.model';
import {AlbumsService} from '../../services/albums.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent {

    album$: Observable<Album> = this.albumsService.fetchAlbum(Number(this.route.snapshot.paramMap.get('id')));

    photos$: Observable<Photo[]> = this.photosService.fetchPhotos(Number(this.route.snapshot.paramMap.get('id')));

    constructor(private route: ActivatedRoute,
                private albumsService: AlbumsService,
                private photosService: PhotosService) { }

}
