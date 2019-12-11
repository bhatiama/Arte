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
  constructor(private client: ClientService) { }

  ngOnInit() {
      this.client.getUsername()
      .subscribe(res => {
        this.client.getPlaylist(res.id)
      // tslint:disable-next-line: no-shadowed-variable
      .subscribe(res => {
        this.searchResult = res.items;
        });
      });
  }

}
