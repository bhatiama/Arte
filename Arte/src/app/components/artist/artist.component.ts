import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { Album } from 'src/app/models/albums';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  id: number;
  name: string;
  genre: any;
  artist: Artist[];
  albums: Album[];
  constructor() { }

  ngOnInit() {
  }


}
