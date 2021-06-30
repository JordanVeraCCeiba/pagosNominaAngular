import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EmpleadoService } from './empleado.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Empleado } from '../model/empleado';
import { HttpResponse } from '@angular/common/http';

describe('EmpleadoService', () => {

  let httpMock: HttpTestingController;
  let service: EmpleadoService;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmpleadoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(EmpleadoService);
  });

 it('should be created', () => {
    const empleadoService: EmpleadoService = TestBed.inject(EmpleadoService);
    expect(empleadoService).toBeTruthy();
  });

  it('service deberia listar empleado', () => {
    const dummyEmpleado = [
      new Empleado('dsad', "asdas",434343, "03/02/1999", 850000,"4234"), 
      new Empleado('fsdfsd', "fsdfsdf",234343, "28/01/1998", 2000000,"assdasd")
    ];
    service.consultar().subscribe(Empleados => {
      expect(Empleados.length).toBe(2);
      expect(Empleados).toEqual(dummyEmpleado);
    });
    const req = httpMock.expectOne(`${environment.endpoint}/empleados`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyEmpleado);
  });

  it('deberia crear un Empleado', () => {
    const dummyEmpleado = new Empleado('Jordan', "Vera",1090506, "25/03/1997", 2000000,"Arquitecto Desarrollador");
    service.guardar(dummyEmpleado).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${environment.endpoint}/empleados`);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia actualizar un Empleado', () => {
    const dummyEmpleado = new Empleado('Jordan', "Vera",1090506292, "25/03/1997", 2000000,"Arquitecto Desarrollador");
    const empleadoIdEmpleado = 1;
    service.actualizar(dummyEmpleado, empleadoIdEmpleado).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${environment.endpoint}/empleados`+"/"+empleadoIdEmpleado);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({body: true}));
  });


});
