import { Component } from '@angular/core';
import { Persona } from '../persona'

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  persona:Persona = {
    name: 'Liz',
    age: 20,
  }
}
