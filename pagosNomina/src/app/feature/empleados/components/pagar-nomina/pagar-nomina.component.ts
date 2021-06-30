import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../shared/service/empleado.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

const PAGO_REALIZADO_CON_EXITO = "Pago realizado con exito";

@Component({
  selector: 'app-pagar-nomina',
  templateUrl: './pagar-nomina.component.html'
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

  pagarEmpleado() {
     this.empleadoServices.pagar(this.pagarSalarioForm.value, this.router.snapshot.params.id).subscribe(
       response => {
         this.mensaje = PAGO_REALIZADO_CON_EXITO;
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

  construirFormularioPagar() {
    this.pagarSalarioForm = new FormGroup({
      pagoEmpleado: new FormControl('', [Validators.required, Validators.max(10000000000), Validators.min(1)])
    });
  }

}
