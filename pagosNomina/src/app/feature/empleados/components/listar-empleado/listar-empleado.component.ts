import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadoService } from 'src/app/feature/empleados/shared/service/empleado.service';
import { Empleado } from 'src/app/feature/empleados/shared/model/empleado'; 

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {
  public listaEmpleados: Observable<Empleado[]>;

  constructor(protected empleadoService: EmpleadoService) {}

  ngOnInit() {
    this.listaEmpleados = this.empleadoService.consultar();
  }

  actualizar(empleado: Empleado, id: number) {
    this.empleadoService.actualizar(empleado, id).subscribe();
  }

  eliminar(id: number) {
    this.empleadoService.eliminar(id).subscribe();
    location.reload();
  }

}
