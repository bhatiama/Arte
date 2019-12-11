import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { ClientService} from '../../services/client.service';
import { ActivatedRoute , Params } from "@angular/router";
import { Album } from 'src/app/models/albums';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  searchStr:string;
  searchRes : Artist[];
  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  searchMusic(){
    this.clientService.getToken()
    .subscribe(res => {
      this.clientService.searchMusicArtist(this.searchStr,'artist',res.access_token)
      .subscribe(res =>{
        this.searchRes = res.artists.items;
    })
  })

}
