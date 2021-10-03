import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificacionesComponent } from 'src/app/components/certificaciones/certificaciones.component';
import { ExpLaboralComponent } from 'src/app/components/exp-laboral/exp-laboral.component';
import { MisDatosComponent } from 'src/app/components/mis-datos/mis-datos.component';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: "explaboral",
        component: ExpLaboralComponent
      },
      {
        path: "certificaciones",
        component: CertificacionesComponent
      },
      {
        path: "misdatos",
        component: MisDatosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
