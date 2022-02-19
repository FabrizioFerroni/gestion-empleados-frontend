import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/class/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {

  id: number;
  empleado : Empleado;
  constructor(
    private route:ActivatedRoute,
    private empleadoService:EmpleadoService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoService.get_empleadosPorId(this.id).subscribe(
      response => {
        this.empleado = response;
        console.log(response);

      }
    )
  }

  volveratras(){
    this.router.navigate(['empleados'])
  }
}
