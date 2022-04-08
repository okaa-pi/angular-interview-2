import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Album} from '../../models/album.model';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-album-tile',
  templateUrl: './album-tile.component.html',
  styleUrls: ['./album-tile.component.css']
})
export class AlbumTileComponent implements OnInit {

  @Input()
  album? : Album;

  @Input()
  user? : User | null;

  @Output()
  click = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
