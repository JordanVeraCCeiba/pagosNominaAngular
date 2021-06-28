import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { ListarEmpleadoComponent } from './components/listar-empleado/listar-empleado.component';
import { ListarNominaComponent } from './components/listar-nomina/listar-nomina.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { PagarNominaComponent } from './components/pagar-nomina/pagar-nomina.component';

const routes: Routes = [
  {
    path: '',
    component: EmpleadoComponent,
    children: [

      {
        path: 'crear',
        component: CrearEmpleadoComponent
      },
      {
        path: 'listar',
        component: ListarEmpleadoComponent
      },
      {
        path: 'actualizar/:id',
        component: CrearEmpleadoComponent
      },
      {
        path: 'pagar/:id',
        component: PagarNominaComponent
      },
      {
        path: 'listarNomina',
        component: ListarNominaComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
