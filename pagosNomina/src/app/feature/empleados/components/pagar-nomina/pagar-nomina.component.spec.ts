import {waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PagarNominaComponent } from './pagar-nomina.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EmpleadoService } from '../../shared/service/empleado.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('PagarNominaComponent', () => {

  let component: PagarNominaComponent;
  let fixture: ComponentFixture<PagarNominaComponent>;
  let empleadoService: EmpleadoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarNominaComponent ],
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
    fixture = TestBed.createComponent(PagarNominaComponent);
    component = fixture.componentInstance;
    empleadoService = TestBed.inject(EmpleadoService);
    spyOn(empleadoService, 'pagar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.pagarSalarioForm.valid).toBeFalsy();
  });

  it('Realizar pago', () => {
    expect(component.pagarSalarioForm.valid).toBeFalsy();
    component.pagarSalarioForm.controls.pagoEmpleado.setValue(855000);
    expect(component.pagarSalarioForm.valid).toBeTruthy();
    component.pagarEmpleado();
  });
  
});
