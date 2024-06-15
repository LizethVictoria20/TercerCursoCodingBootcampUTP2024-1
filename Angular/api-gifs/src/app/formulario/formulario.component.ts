import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  isVisible:boolean = false;

  imprimirConsola(name:string) {
    console.log(name)
    this.isVisible = true;
  }
}
