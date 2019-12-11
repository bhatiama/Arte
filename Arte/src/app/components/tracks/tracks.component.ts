import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {

  constructor(private clientService: ClientService) { }
  searchStr: string;
  searchRes: string[];
  ngOnInit() {
  }
  searchMusics(){
    this.clientService.getToken()
    .subscribe(res => {
<<<<<<< Updated upstream
      this.clientService.searchMusicTrack(this.searchStr, 'track', res.access_token)
      .subscribe(res => {
=======
      this.clientService.searchMusicTrack(this.searchStr,'track',res.access_token)
      .subscribe(res =>{
>>>>>>> Stashed changes
        this.searchRes = res.tracks.items;
    });
  });
}

}
