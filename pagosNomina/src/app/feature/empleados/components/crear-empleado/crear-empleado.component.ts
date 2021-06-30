import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../shared/service/empleado.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Empleado } from 'src/app/feature/empleados/shared/model/empleado';
import { ActivatedRoute } from '@angular/router';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 100;
const EMPLEADO_GUARDADO = "Empleado guardado exitosamente";
const EMPLEADO_ACTUALIZADO = "Empleado actualizado exitosamente";

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})

export class CrearEmpleadoComponent implements OnInit {
  
  empleadoForm: FormGroup;
  mensaje: any;
  error = false;
  exito = false;
  id: number;
  empleado: Empleado;
  esFormCrear: boolean;
  
  constructor(protected empleadoServices: EmpleadoService, private router:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.esFormCrear = !this.id;
    this.construirFormularioEmpleado();
  }

  guardarEmpleado() {
    if (this.esFormCrear) {
      this.crearEmpleado();
    } else {
      this.actualizarEmpleado();
    }
  }

  crearEmpleado() {
    this.empleadoServices.guardar(this.empleadoForm.value).subscribe(
      response => {
        this.mensaje = EMPLEADO_GUARDADO;
        console.log('Respuesta: ' + response);
        this.exito = true;
        this.error = false;
      },
      err => { 
        this.mensaje = err.error.mensaje;
        this.error = true;
        this.exito = false;
      }
    );
  }

  actualizarEmpleado() {
    this.empleadoServices.actualizar(this.empleadoForm.value, this.router.snapshot.params.id).subscribe(
      response => {
        this.mensaje = EMPLEADO_ACTUALIZADO;
        console.log('Respuesta: ' + response)
        this.exito = true;
        this.error = false;
      },
      err => { 
        this.mensaje = err.error.mensaje;
        this.error = true;
        this.exito = false;
      }
    );
  }

  private construirFormularioEmpleado() {
    this.empleadoForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),                                                  
      cedula: new FormControl('', [Validators.required, Validators.max(1000000000), Validators.min(100000)]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      salario: new FormControl('', [Validators.required, Validators.max(10000000000), Validators.min(1)]),
      cargo: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
    });
  }

}
