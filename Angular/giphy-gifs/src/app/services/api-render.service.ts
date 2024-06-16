import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api_key = '2aSGCFFTsHv0pK5by4LRUCbv1Ihs9CMl';  // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`api.giphy.com/v1/gifs/search?api_key=${this.api_key}&limit=10`)
    
  }
}
