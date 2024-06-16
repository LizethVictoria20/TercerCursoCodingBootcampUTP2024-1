import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchField = new FormControl

  ngOnInit(): void {
    
  }
}
