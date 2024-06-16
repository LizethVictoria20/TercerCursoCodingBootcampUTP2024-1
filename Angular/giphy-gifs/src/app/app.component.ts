import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api-render.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: []
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getData().subscribe(response => {
      this.data = response;
      console.log(response.data.images)
    });
  }
}
