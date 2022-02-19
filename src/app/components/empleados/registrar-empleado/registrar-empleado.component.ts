import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/class/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  guardarEmpleado() {
    this.empleadoService.post_empleados(this.empleado).subscribe(
      response => {
        console.log(response);
        this.irALaListaDeEmpleados();
      },
      error => {
        console.log(error);

      }
    )
  }

  irALaListaDeEmpleados() {
    this.router.navigate(['/empleados']);
    swal.fire({
      title: 'Empleado registrado',
      text: `El empleado ${this.empleado.nombre} ${this.empleado.apellido} ha sido creado con éxito`,
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#157347',
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'outnone btn btn-success',
      }
    })
  }

  onSubmit() {
    this.guardarEmpleado();
  }

}
