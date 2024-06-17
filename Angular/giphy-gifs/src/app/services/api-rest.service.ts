import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) {}

  saludo = 'Hola!';

  getGifs(query: string): Observable<any[]> {
    const api_key = '2aSGCFFTsHv0pK5by4LRUCbv1Ihs9CMl';
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}&limit=15`;

    return this.http.get(apiUrl).pipe(
      map((response: any) => response.data.map((item: any) => item.images.fixed_height_small))
    );
  }
}
