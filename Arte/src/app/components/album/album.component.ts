import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from "../../models/Album";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  id:string;
  album:Album[];
  constructor(private client: ClientService , private route:ActivatedRoute) { }
  ngOnInit() {
    this.route.params.pipe(map(params => params['id'])
      .subscribe((id) => {
        this.client.getToken()
          .subscribe(data => {
            this.client.getAlbum(id, data.access_token)
              .subscribe(album => {
                this.album = album;
              })
          })
      })
  }
}
