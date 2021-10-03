import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { ExpLaboralComponent } from './exp-laboral/exp-laboral.component';
import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CertificacionesComponent,
    ExpLaboralComponent,
    MisDatosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    CertificacionesComponent,
    ExpLaboralComponent,
    MisDatosComponent
  ]
})
export class ComponentsModule { }
