import { NgModule } from '@angular/core';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { ListarEmpleadoComponent } from './components/listar-empleado/listar-empleado.component';
import { ListarNominaComponent } from './components/listar-nomina/listar-nomina.component';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { PagarNominaComponent } from './components/pagar-nomina/pagar-nomina.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { SharedModule } from '@shared/shared.module';
import { EmpleadoService } from './shared/service/empleado.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    CrearEmpleadoComponent,
    ListarEmpleadoComponent,
    ListarNominaComponent,
    PagarNominaComponent,
    EmpleadoComponent
  ],
  imports: [
    EmpleadoRoutingModule,
    SharedModule,
    NgbModule,
    MatIconModule
  ],
  providers: [EmpleadoService]
})
export class EmpleadoModule { }
