import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../shared/service/empleado.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-pagar-nomina',
  templateUrl: './pagar-nomina.component.html',
  styleUrls: ['./pagar-nomina.component.css']
})
export class PagarNominaComponent implements OnInit {
  
  pagarSalarioForm: FormGroup;
  error = false;
  exito = false; 
  mensaje: any;
  id: number;
  
  constructor(protected empleadoServices: EmpleadoService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.construirFormularioPagar();
  }

  pagar(){
    this.pagarEmpleado();
  }

  pagarEmpleado() {
    this.empleadoServices.pagar(this.pagarSalarioForm.value, this.router.snapshot.params.id).subscribe(
      response => {
        console.log('Respuesta: ' + response)
        this.error = false;
        this.mensaje = "PAGO EXITOSO";
      },
      err => { 
        this.mensaje = err.error.mensaje;
        this.error = true;
        this.exito = false;
      }
    );
  }

  construirFormularioPagar() {
    this.pagarSalarioForm = new FormGroup({
      pagoEmpleado: new FormControl('', [Validators.required, Validators.max(100000000), Validators.min(1)])
    });
  }

}
