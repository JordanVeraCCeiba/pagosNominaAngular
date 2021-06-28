import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
//import { environment } from 'src/environments/environment';
import { Empleado } from '../model/empleado';
import { Pagar } from '../model/pagar';
import { Nomina } from '../model/nomina';

@Injectable()
export class EmpleadoService {

  constructor(protected http: HttpService) {}

  _baseUrl =  "http://localhost:8080/";  
 
  public consultar() {
    return this.http.doGet<Empleado[]>(this._baseUrl+`pagos/empleados`, this.http.optsName('consultar empleados'));
  }

  public consultarNominaEmpleados() {
    return this.http.doGet<Nomina[]>(this._baseUrl+`pagos/nomina`, this.http.optsName('consultar nomina empleados'));
  }

  public guardar(empleado: Empleado) {
    var info = empleado.fechaNacimiento.split('-');
    empleado.fechaNacimiento =  (info[2] + '/' + info[1] + '/' + info[0]);
    empleado.fechaNacimiento = empleado.fechaNacimiento.substr(-10);
    return this.http.doPost<Empleado, any>(this._baseUrl+`pagos/empleados`, empleado,
                                                this.http.optsName('crear empleado'));
  }

  public actualizar(empleado: Empleado, idEmpleado: number) {
    var info = empleado.fechaNacimiento.split('-');
    empleado.fechaNacimiento =  (info[2] + '/' + info[1] + '/' + info[0]);
    empleado.fechaNacimiento = empleado.fechaNacimiento.substr(-10);
    return this.http.doPut<Empleado, any>(this._baseUrl+`pagos/empleados/`+idEmpleado, empleado,
                                                this.http.optsName('actualizar empelado'));
  }

  public obtenerData(idEmpleado: number) {
    return this.http.doGetById(this._baseUrl+`pagos/empleados/`+idEmpleado,
                                                this.http.optsName('actualizar empleado'));
  }

  public eliminar(idEmpleado: number) {
    return this.http.doDelete(this._baseUrl+`pagos/empleados/`+idEmpleado,
                                                this.http.optsName('eliminar empleado'));
  }

  public pagar(pagar: Pagar, idEmpleado: number) {
    
    pagar.idEmpleado = idEmpleado;

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    pagar.fechaPago = day+"/"+month+"/"+year;
     
    return this.http.doPost<Pagar, any>(this._baseUrl+`pagos/nomina`, pagar,
                                                this.http.optsName('pagar empleado'));
  }

}
