import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private searchUrl:string;
  // tslint:disable-next-line: variable-name
  private client_id ='8173fa018b554d1c8d306e92da2c364b';
  // tslint:disable-next-line: variable-name
  private client_secret = '8173fa018b554d1c8d306e92da2c364b';
  private ArtistUrl: string;
  private AlbumsUrl: string;
  private AlbumUrl: string;
  private encoded = btoa(this.client_id + ':' + this.client_secret);

  constructor() { }
}
