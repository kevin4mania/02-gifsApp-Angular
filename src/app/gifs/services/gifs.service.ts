import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _apikey = 'EDdY5g2zRVHby65DCbJKKIvuRGLhHIF7';
  private _historial: string[] = [];

  constructor(private http: HttpClient) {}

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    // console.log(this._historial);
    this.http
      .get(
        'https://api.giphy.com/v1/gifs/search?api_key=EDdY5g2zRVHby65DCbJKKIvuRGLhHIF7&q=one piece&limit=10'
      )
      .subscribe((resp) => {
        console.log('respuesta API');
        console.log(resp);
      });
  }
}
