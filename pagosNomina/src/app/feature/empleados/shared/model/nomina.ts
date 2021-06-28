export class Nomina {
    
    id: number;
    idEmpleado: number;
    fechaPago: String;
    pagoEmpleado: number;
    salud: number;
    pension: number;

    constructor(id: number, idEmpleado: number, fechaPago: String, pagoEmpleado: number, salud: number, pension: number) {
        this.id = id;
        this.idEmpleado = idEmpleado;
        this.fechaPago = fechaPago;
        this.pagoEmpleado = pagoEmpleado;
        this.salud = salud;
        this.pension = pension;
    }
    
}