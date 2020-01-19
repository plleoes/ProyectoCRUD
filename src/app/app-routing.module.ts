import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaComponent } from './alta/alta.component';
import { ListadoComponent } from './listado/listado.component';
import { ModificacionComponent } from './modificacion/modificacion.component';


const routes: Routes = [
  {
    path: 'alta',
    component: AltaComponent
  },
  {
    path: 'listado',
    component: ListadoComponent
  },
  {
    path: 'modificar',
    component: ModificacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
