import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { EmpleadoPage } from '../page/empleado/empleado.po';

describe('workspace-project Empleado', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let Empleado: EmpleadoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        Empleado = new EmpleadoPage();
    });

    it('Deberia crear Empleado', () => {

        const NOMBRE = 'Jordan';
        const APELLIDO = 'Vera';
        const CEDULA = 1090506292;
        const FECHA_NACIMIENTO = '25/03/1997';
        const SALARIO = 2000000;
        const CARGO = 'Arquitecto Desarrollador';

        page.navigateTo();
        navBar.clickBotonEmpleados();
        
        Empleado.ingresarNombre(NOMBRE);
        Empleado.ingresarApellido(APELLIDO);
        Empleado.ingresarCedula(CEDULA);
        Empleado.ingresarFechaNacimiento(FECHA_NACIMIENTO);
        Empleado.ingresarSalario(SALARIO);
        Empleado.ingresarCargo(CARGO)
         
        Empleado.clickBotonCrearEmpleado();
        // Adicionamos las validaciones despues de la creación
        //expect(Empleado.getMsjExito()).toEqual("Empleado guardado exitosamente");
    });

    it('Deberia listar Empleados', () => {
        page.navigateTo();
        navBar.clickBotonEmpleados();
        Empleado.clickBotonListarEmpleados();
        expect(50).toBe(Empleado.contarEmpleados());
    });

    it('Deberia actualizar Empleado', () => {
       
        const NOMBRE = 'Jordan';
        const APELLIDO = 'Vera';
        const CEDULA = 1090506292;
        const FECHA_NACIMIENTO = '25/03/1997';
        const SALARIO = 2000000;
        const CARGO = 'Arquitecto Desarrollador';

        page.navigateTo();
        navBar.clickBotonEmpleados();
        Empleado.clickBotonListarEmpleados();
        Empleado.clickBotonActualizarEmpleados();
        
        Empleado.ingresarNombre(NOMBRE);
        Empleado.ingresarApellido(APELLIDO);
        Empleado.ingresarCedula(CEDULA);
        Empleado.ingresarFechaNacimiento(FECHA_NACIMIENTO);
        Empleado.ingresarSalario(SALARIO);
        Empleado.ingresarCargo(CARGO);

        Empleado.clickBotonActualizar();
        // Adicionamos las validaciones despues de la creación
        //expect(Empleado.getMsjExito()).toEqual("Empleado guardado exitosamente");
    });
});
