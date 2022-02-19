import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarEmpleadoComponent } from './components/empleados/actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './components/empleados/empleado-detalles/empleado-detalles.component';
import { ListaEmpleadosComponent } from './components/empleados/lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './components/empleados/registrar-empleado/registrar-empleado.component';

const routes: Routes = [
  {path:'empleados', component: ListaEmpleadosComponent},
  {path:'registrar-empleado', component: RegistrarEmpleadoComponent},
  {path:'empleado/:id/editar', component: ActualizarEmpleadoComponent},
  {path:'empleado/:id', component: EmpleadoDetallesComponent},
  {path: '', redirectTo:'empleados', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
