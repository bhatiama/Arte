import { Observable } from 'rxjs';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  searchResult: string[];
  tracks: string[];
  constructor(private client: ClientService) { }


  // service calls for getting playlists
  ngOnInit() {
      this.client.getUsername()
      .subscribe(res => {
        this.client.getPlaylist(res.id)
      // tslint:disable-next-line: no-shadowed-variable
      .subscribe(res => {
        this.searchResult = res.items;
        console.log(this.searchResult);
        });
      });
  }

  getPlaylistTracks(playlistId: string) {
    console.log(playlistId);
    this.client.getPlaylistTracks(playlistId)
    .subscribe(res => {
      this.tracks = res.items;
      console.log(this.tracks);
    });
  }

}
