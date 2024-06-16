import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { map } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  searchField = new FormControl
  results: any[] = []

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.searchField.valueChanges
    .subscribe((value) => {
      this.getData(value)
    })
  }

  private getData(query: string) {
    const api_key = '2aSGCFFTsHv0pK5by4LRUCbv1Ihs9CMl'
    this.http.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}&limit=2`)
    .pipe(
      map((response:any) => {
        return response.data.map((item) => item.images.original);
      })
    )
    .subscribe((data) => {
      this.results = data
      console.log(data)

    })
  }
}

