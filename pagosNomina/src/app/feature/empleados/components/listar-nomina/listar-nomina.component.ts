import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadoService } from 'src/app/feature/empleados/shared/service/empleado.service';
import { Nomina } from 'src/app/feature/empleados/shared/model/nomina'; 

@Component({
  selector: 'app-listar-nomina',
  templateUrl: './listar-nomina.component.html',
  styleUrls: ['./listar-nomina.component.css']
})
export class ListarNominaComponent implements OnInit {
  
  public listaNomina: Observable<Nomina[]>;

  constructor(protected empleadoService: EmpleadoService) {}

  ngOnInit() {
    this.listaNomina = this.empleadoService.consultarNominaEmpleados();
  }

}
