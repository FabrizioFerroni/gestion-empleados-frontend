import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/class/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import  swal  from 'sweetalert2';
@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  id: number;
  empleado: Empleado = new Empleado();
  constructor(
    private empleadoService: EmpleadoService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleadoService.get_empleadosPorId(this.id).subscribe(
      response => {
        this.empleado = response;
      }, error => {
        console.log(error)
      }
    );
  }

  irAlaListaDeEmpleados() {
    this.router.navigate(['/empleados']);
    swal.fire({
      title: 'Empleado actualizado',
      text: `El empleado ${this.empleado.nombre} ${this.empleado.apellido} ha sido actualizado con éxito`,
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
  this.empleadoService.put_empleado(this.id, this.empleado).subscribe(dato => {
    this.irAlaListaDeEmpleados();
  }, error => {
    console.log(error)
  });
}

}
