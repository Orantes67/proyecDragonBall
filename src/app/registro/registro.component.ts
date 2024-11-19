import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { Registro } from '../registro';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'], // Corregido: 'styleUrls'
})
export class RegistroComponent {
  registro: Registro = {
    nombre: '',
  };

  constructor(private servicio: RegisterService) {}

  guardaDatos(): void {
    this.servicio.newInfo(this.registro); // Pasar el objeto `registro` al servicio
    console.log('Datos guardados:', this.registro);
    
  }
}


