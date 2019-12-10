import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private searchUrl: string;
  private clientId = '8173fa018b554d1c8d306e92da2c364b';
  private clientSecret = '06356f82e3334a85b8b520aca5c57d6f';
  private encoded = btoa(this.clientId + ':' + this.clientSecret);
  private AlbumUrl: string;
  constructor(private http: HttpClient) { }

  getToken(): Observable<any> {
    const params = ('grant_type=client_credentials');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + this.encoded
      })
    };

    return this.http.post('https://accounts.spotify.com/api/token', params , httpOptions );

  }

  getUsername(token: string): Observable<any> {
    this.searchUrl = 'https://api.spotify.com/v1/me';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token
      })
    };
    console.log(httpOptions);
    return this.http.get(this.searchUrl , httpOptions);
}

  getPlaylist(token: string): Observable<any> {

  console.log(this.encoded);
  this.searchUrl = 'https://api.spotify.com/v1/users/' + token + '/playlists';
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token
    })
  };

  return this.http.get(this.searchUrl , httpOptions);
}

searchMusic(str:string, type='album' ,token:string): Observable<any>{
  this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token
    })
  };
  return this.http.get(this.searchUrl , httpOptions);
}

getAlbum(id:string ,token:string): Observable<any>{
  
  this.AlbumUrl = 'https://api.spotify.com/v1/albums/'+id;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token
    })
  };
  console.log("Came here2");
  return this.http.get(this.AlbumUrl , httpOptions);

}


}
