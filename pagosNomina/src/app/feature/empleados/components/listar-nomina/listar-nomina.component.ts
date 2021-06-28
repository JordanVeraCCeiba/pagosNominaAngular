import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadoService } from 'src/app/feature/empleados/shared/service/empleado.service';
import { Nomina } from 'src/app/feature/empleados/shared/model/nomina'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-listar-nomina',
  templateUrl: './listar-nomina.component.html',
  styleUrls: ['./listar-nomina.component.css']
})
export class ListarNominaComponent implements OnInit {
  
  public listaNomina: Observable<Nomina[]>;
  nominaListForm: FormGroup;
  constructor(protected empleadoService: EmpleadoService) {}

  ngOnInit() {
    this.construirFormularioEmpleado();
  }

  consultarEntreFechas(){
    this.listaNomina = this.empleadoService.consultarNominaEmpleadosEntreFechas(this.nominaListForm.value);
  }

  private construirFormularioEmpleado() {
    this.nominaListForm = new FormGroup({
      fecha1: new FormControl('', [Validators.required]),
      fecha2: new FormControl('', [Validators.required])
    });
  }


}
