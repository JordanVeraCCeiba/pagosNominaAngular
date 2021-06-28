export class Pagar {

    idEmpleado: number;
    fechaPago: String;
    pagoEmpleado: number;

    constructor(idEmpleado: number, fechaPago: String, pagoEmpleado: number) {
        this.idEmpleado = idEmpleado;
        this.fechaPago = fechaPago;
        this.pagoEmpleado = pagoEmpleado;
    }
    
}