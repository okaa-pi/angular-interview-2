import {Component, OnInit} from '@angular/core';
import {EMPTY, Observable} from 'rxjs';
import {Album} from '../../models/album.model';
import {AlbumsService} from '../../services/albums.service';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums$ : Observable<Album[]> = this.albumsService.fetchAlbums();
  loading = true;

  constructor(private albumsService: AlbumsService,
              private usersService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
  }

  findUserById(userId: number) : Observable<User> {
    // Idk why it doesn't work with this :(
    // return this.usersService.fetchUser(userId);
    return EMPTY;
  }

  async openAlbum(albumId: number) {
    await this.router.navigateByUrl(`/${albumId}`);
  }

}
