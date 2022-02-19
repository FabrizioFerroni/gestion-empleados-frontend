import { EmpleadoService } from './../../../services/empleado.service';
import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/class/empleado';
import { Router } from '@angular/router';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados: Empleado[];
  constructor(
    private empleadoService:EmpleadoService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.obtenerEmpleados()
  }

  private obtenerEmpleados() {
    this.empleadoService.get_empleados().subscribe(
      response => {
        console.log(response);
        this.empleados = response;
      }
    )
  }

  actualizarEmpleado(id: number) {
    this.router.navigate(['empleado/'+ id + '/editar']);
  }

  verdetallesEmpleado(id: number) {
    this.router.navigate(['empleado/'+ id]);
  }




  eliminarEmpleado(id: number) {

    swal.fire({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al empleado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#157347',
      cancelButtonColor: '#BB2D3B',
      confirmButtonText: 'Sí, elimínalo!',
      cancelButtonText: 'No, cancelar',
      customClass: {
        cancelButton: 'outnone btn-danger',
        confirmButton: 'outnone btn btn-success',
      }
    }).then((result) => {
      if (result.isConfirmed) {

        this.empleadoService.delete_empleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleados();
          swal.fire({
            title: 'Empleado eliminado!',
            text: 'El empleado ha sido eliminado con exito.',
            icon: 'success',
            confirmButtonColor: '#157347',
            confirmButtonText: 'Aceptar',
            customClass: {
              confirmButton: 'outnone btn btn-success'
            }
          })
        })

      }
    })
  }


}
