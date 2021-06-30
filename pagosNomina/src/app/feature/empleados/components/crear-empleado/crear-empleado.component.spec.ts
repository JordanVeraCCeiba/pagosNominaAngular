import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CrearEmpleadoComponent } from './crear-empleado.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EmpleadoService } from '../../shared/service/empleado.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('CrearEmpleadoComponent', () => {

  let component: CrearEmpleadoComponent;
  let fixture: ComponentFixture<CrearEmpleadoComponent>;
  let empleadoService: EmpleadoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEmpleadoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule
      ],
      providers: [EmpleadoService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEmpleadoComponent);
    component = fixture.componentInstance;
    empleadoService = TestBed.inject(EmpleadoService);
    spyOn(empleadoService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.empleadoForm.valid).toBeFalsy();
  });

  it('Registrando empleado', () => {
    expect(component.empleadoForm.valid).toBeFalsy();
    component.empleadoForm.controls.nombre.setValue('Jordan');
    component.empleadoForm.controls.apellido.setValue('Vera');
    component.empleadoForm.controls.cedula.setValue(123456);
    component.empleadoForm.controls.fechaNacimiento.setValue("25/03/1997");
    component.empleadoForm.controls.salario.setValue(2500000);
    component.empleadoForm.controls.cargo.setValue("Arquitecto Desarrollador Java");
    expect(component.empleadoForm.valid).toBeTruthy();
    component.guardarEmpleado();
  });
  
});
