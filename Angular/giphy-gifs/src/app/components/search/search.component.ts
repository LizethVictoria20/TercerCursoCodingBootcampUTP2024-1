import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchField = new FormControl('');
  results: any[] = [];


  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSearch(): void {
    const value = this.searchField.value;
    if (value) {
      this.getData(value);
    } else {
      this.results = [];
    }
  }
  clearResults(): void {
    this.results = [];
  }

  private getData(query: string) {
    const api_key = '2aSGCFFTsHv0pK5by4LRUCbv1Ihs9CMl';
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}&limit=15`;

    this.http.get(apiUrl)
      .pipe(
        map((response: any) => response.data.map((item: any) => item.images.fixed_height_small))
      )
      .subscribe(
        (data) => {
          this.results = data;
          console.log(data);
        }
      );
  }
}
