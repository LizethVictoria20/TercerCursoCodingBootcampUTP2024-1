import { Component } from '@angular/core';
import { Persona } from '../persona'
@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html', 
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
 number:number = 1


 aumentar() {
  this.number++
 }
 disminuir() {
  this.number--
 }
}
