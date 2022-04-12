import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string = "BQBNYjypj7SYekazV1iqYQPRkHiWMkXmGiFpODfhBdRYhU3-OqgP__EXkGYuZSP5HWrpwbLFYZg-xMXBi3cWY-HIxd2nuqU-GnZ23tYIYE2emXXH6eNCgKQ8Rt4sF2IOecbuc9xFige0Ynot81b7BmHe_QnPPYqrE7k";

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map((data: any) => data['albums'].items));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data: any) => data["artists"].items));
  }
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map((data: any) => data['tracks']));;
  }

}