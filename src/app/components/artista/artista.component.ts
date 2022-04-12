import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {
  loadingArtist: boolean = true;
  artista: any = {};
  topTracks: any[] = [];
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtist = true;
    this.router.params.subscribe(params => {
      this.getArtista(params['id'])
      this.getTopTracks(params['id']);

    })
  }
  getArtista(id: string) {
    this.spotify.getArtista(id).subscribe(artista => {
      this.artista = artista;
      this.loadingArtist = false;
    })
  }
  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe(top => {
      console.log(top);
      this.topTracks = top;
    })
  }

}
