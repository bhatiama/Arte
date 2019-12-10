import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private searchUrl: string;
  private clientId = '8173fa018b554d1c8d306e92da2c364b';
  private clientSecret = '06356f82e3334a85b8b520aca5c57d6f';
  private encoded = btoa(this.clientId + ':' + this.clientId);
  constructor(private http: HttpClient) { }

  getToken(): Observable<any> {
    var params = ('grant_type=client_credentials');
    var headers = new HttpHeaders();
    headers.append( 'Authorization', 'Basic ' + this.encoded);

    return this.http.post('https://accounts.spotify.com/api/token', params , {headers} );

  }

  getUsername(token: string): Observable<any> {
    this.searchUrl='https://api.spotify.com/v1/me';
    let headers = new HttpHeaders();
    headers.append('Authorization' , 'Bearer ' + token);
    return this.http.get(this.searchUrl , {headers});
}

  getPlaylist(token: string): Observable<any> {

  console.log(this.encoded);
  this.searchUrl = 'https://api.spotify.com/v1/users/212uzew7ttksinacnuwhttupy/playlists';
  let headers = new HttpHeaders();
  headers.append('Authorization' , 'Bearer ' + token);
  return this.http.get(this.searchUrl , {headers});
}
}
