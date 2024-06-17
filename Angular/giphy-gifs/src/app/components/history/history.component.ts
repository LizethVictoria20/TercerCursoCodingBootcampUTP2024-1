import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../../services/api-rest.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {


  constructor(private apiRestService: ApiRestService) {}
 
  get histories() {
    return this.apiRestService.listaHistorial;
  }
  buscar(query:string) {
    this.apiRestService.getGifs(query)
  }
} 
