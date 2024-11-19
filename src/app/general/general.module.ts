import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from '../registro/registro.component';
import { FormsModule } from '@angular/forms';
import { TransformationsComponent } from '../transformations/transformations.component';



@NgModule({
  declarations: [
    RegistroComponent,
    TransformationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    RegistroComponent,
    TransformationsComponent
  ]
})
export class GeneralModule { }
