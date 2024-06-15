import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent {
  personas:Persona[] = [
    {nombre: 'Juancito', edad: 45},
    {nombre: 'Pepito', edad: 25},
    {nombre: 'Negrito', edad: 15},
  ];
}
