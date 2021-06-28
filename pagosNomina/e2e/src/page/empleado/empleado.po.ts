import { by, element } from 'protractor';

export class EmpleadoPage {
    private linkCrearEmpleado = element(by.xpath('//a[. = "Crear Empleado"]'));
    private linkListarEmpleados = element(by.xpath('//a[. = "Listar Empleados"]'));
    private linkActualizarEmpleados = element(by.id('linkActualizarEmpleado'));

    private inputNombre = element(by.id('nombre'));
    private inputApellido = element(by.id('apellido'));
    private inputCedula = element(by.id('cedula'));
    private inputFechaNacimiento = element(by.id('fechaNacimiento'));
    private inputSalario = element(by.id('salario'));
    private inputCargo = element(by.id('cargo'));

    private listaEmpleados = element.all(by.css('#trListar'));

    private botonGuardarEmpleado = element(by.xpath('//button[. = "Registrar"]'));
    private botonActualizarEmpleado = element(by.xpath('//button[. = "Actualizar"]'));


    async clickBotonCrearEmpleado() {
        await this.linkCrearEmpleado.click();
    }

    async clickBotonListarEmpleados() {
        await this.linkListarEmpleados.click();
    }

    async clickBotonActualizarEmpleados() {
        await this.linkActualizarEmpleados.click();
    }

    async ingresarNombre(nombre) {
        await this.inputNombre.sendKeys(nombre);
    }

    async ingresarApellido(apellido) {
        await this.inputApellido.sendKeys(apellido);
    }

    async ingresarCedula(cedula) {
        await this.inputCedula.sendKeys(cedula);
    }

    async ingresarFechaNacimiento(fechaNacimiento) {
        await this.inputFechaNacimiento.sendKeys(fechaNacimiento);
    }

    async ingresarSalario(salario) {
        await this.inputSalario.sendKeys(salario);
    }

    async ingresarCargo(cargo) {
        await this.inputCargo.sendKeys(cargo);
    }

    async clickBotonGuardarEmpleado() {
        await this.botonGuardarEmpleado.click();
    }

    async clickBotonActualizar() {
        await this.botonActualizarEmpleado.click();
    }

    async contarEmpleados() {
        return this.listaEmpleados.count();
    }

    getMsjExito() {
        return element(by.id('msjExito')).getText() as Promise<string>;
    }
}
