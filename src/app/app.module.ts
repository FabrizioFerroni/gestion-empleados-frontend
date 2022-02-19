import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './components/empleados/lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './components/empleados/registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './components/empleados/actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './components/empleados/empleado-detalles/empleado-detalles.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    RegistrarEmpleadoComponent,
    ActualizarEmpleadoComponent,
    EmpleadoDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
