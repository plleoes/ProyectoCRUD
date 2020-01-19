import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaComponent } from './alta/alta.component';
import { ListadoComponent } from './listado/listado.component';
import { ModificacionComponent } from './modificacion/modificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaComponent,
    ListadoComponent,
    ModificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
