import { PlaylistComponent } from './components/playlist/playlist.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from '../app/components/album/album.component';
import { AlbumsearchComponent } from '../app/components/albumsearch/albumsearch.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'playlist', component: PlaylistComponent},
  {path: 'albums', component: AlbumsearchComponent},
  {path: 'album/:id', component: AlbumComponent},
  {path: 'artists', component: ArtistComponent},
  {path: 'tracks', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
