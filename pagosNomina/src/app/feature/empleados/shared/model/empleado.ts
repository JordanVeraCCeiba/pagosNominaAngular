export class Empleado {

    nombre: string;
    apellido: string;
    cedula: number;
    fechaNacimiento: string;
    salario: number;
    cargo: string;

    constructor(nombre: string, apellido: string, cedula: number, fechaNacimiento: string,salario: number,cargo: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.fechaNacimiento = fechaNacimiento;
        this.salario = salario;
        this.cargo = cargo;
    }
    
}
