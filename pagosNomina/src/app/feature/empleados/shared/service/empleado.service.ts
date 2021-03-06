import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Empleado } from '../model/empleado';
import { Pagar } from '../model/pagar';
import { Nomina } from '../model/nomina';
import { fechaNomina } from '../model/fechaNomina';

@Injectable()
export class EmpleadoService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Empleado[]>(`${environment.endpoint}/empleados`, this.http.optsName('consultar empleados'));
  }

  public consultarNominaEmpleados() {
    return this.http.doGet<Nomina[]>(`${environment.endpoint}/nomina`, this.http.optsName('consultar nomina empleados'));
  }

  public consultarNominaEmpleadosEntreFechas(fechaNomina: fechaNomina) {
    var fecha = fechaNomina.fecha1.split('-');
    var fechaR =  (fecha[2] + '/' + fecha[1] + '/' + fecha[0]);
    fechaR = fechaR.substr(-10);
    fechaNomina.fecha1 = fechaR;
    var fecha = fechaNomina.fecha2.split('-');
    var fechaR =  (fecha[2] + '/' + fecha[1] + '/' + fecha[0]);
    fechaR = fechaR.substr(-10);
    fechaNomina.fecha2 = fechaR;
    return this.http.doPost<fechaNomina, any>(`${environment.endpoint}/nomina/fechas`,fechaNomina, 
                                                this.http.optsName('consultar nomina empleados entre fechas'));
  }

  public guardar(empleado: Empleado) {
    var info = empleado.fechaNacimiento.split('-');
    empleado.fechaNacimiento =  (info[2] + '/' + info[1] + '/' + info[0]);
    empleado.fechaNacimiento = empleado.fechaNacimiento.substr(-10);
    return this.http.doPost<Empleado, any>(`${environment.endpoint}/empleados`, empleado,
                                                this.http.optsName('crear empleado'));
  }

  public actualizar(empleado: Empleado, idEmpleado: number) {
    var info = empleado.fechaNacimiento.split('-');
    empleado.fechaNacimiento =  (info[2] + '/' + info[1] + '/' + info[0]);
    empleado.fechaNacimiento = empleado.fechaNacimiento.substr(-10);
    return this.http.doPut<Empleado, any>(`${environment.endpoint}/empleados/`+idEmpleado, empleado,
                                                this.http.optsName('actualizar empelado'));
  }

  public obtenerData(idEmpleado: number) {
    return this.http.doGetById(`${environment.endpoint}/empleados/`+idEmpleado,
                                                this.http.optsName('actualizar empleado'));
  }

  public eliminar(idEmpleado: number) {
    return this.http.doDelete(`${environment.endpoint}/empleados/`+idEmpleado,
                                                this.http.optsName('eliminar empleado'));
  }

  public pagar(pagar: Pagar, idEmpleado: number) {
    
    pagar.idEmpleado = idEmpleado;

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    pagar.fechaPago = day+"/"+month+"/"+year;
     
    return this.http.doPost<Pagar, any>(`${environment.endpoint}/nomina`, pagar,
                                                this.http.optsName('pagar empleado'));
  }

}
