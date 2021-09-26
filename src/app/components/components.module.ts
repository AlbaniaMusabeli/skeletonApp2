import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { ExpLaboralComponent } from './exp-laboral/exp-laboral.component';
import { MisDatosComponent } from './mis-datos/mis-datos.component';



@NgModule({
  declarations: [
    CertificacionesComponent,
    ExpLaboralComponent,
    MisDatosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CertificacionesComponent,
    ExpLaboralComponent,
    MisDatosComponent
  ]
})
export class ComponentsModule { }
