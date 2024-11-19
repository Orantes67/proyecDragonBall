import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Registro } from './registro';
import { log } from 'console';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private info: BehaviorSubject<Registro[]> = new BehaviorSubject<Registro[]>([]);
  infor$ = this.info.asObservable();

  constructor() {}

  
  newInfo(nuevoRegistro: Registro): void {
    const registrosActuales = this.info.getValue(); // Obtener los registros actuales
    this.info.next([...registrosActuales, nuevoRegistro]); // Agregar el nuevo registro y emitir la lista actualizada
    console.log(nuevoRegistro);
    
  }

 
  returnDatos(): Registro[] {
    return this.info.getValue();
  }
}
