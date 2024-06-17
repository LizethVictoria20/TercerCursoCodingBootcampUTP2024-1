import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiRestService } from '../../services/api-rest.service';

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

  constructor(private apiRestService: ApiRestService) {}

  ngOnInit(): void {
  }

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

  private getData(query: string): void {
    this.apiRestService.getGifs(query).subscribe(
      (data) => {
        this.results = data;
        console.log(data);
      }
    );
  }
}
