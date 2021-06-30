import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarNominaComponent } from './listar-nomina.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EmpleadoService } from '../../shared/service/empleado.service';
import { Nomina } from '../../shared/model/nomina';
import { HttpService } from 'src/app/core/services/http.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

describe('ListarNominaComponent', () => {
  let component: ListarNominaComponent;
  let fixture: ComponentFixture<ListarNominaComponent>;
  let empleadoService: EmpleadoService;
  const listarNomina: Nomina[] = [new Nomina(2, 1,"29/6/2021", 2300000, 100000,100000)];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarNominaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule, 
        NgbModule,
        NgbNavModule
      ],
      providers: [EmpleadoService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarNominaComponent);
    component = fixture.componentInstance;
    empleadoService = TestBed.inject(EmpleadoService);
    spyOn(empleadoService, 'consultarNominaEmpleados').and.returnValue(
      of(listarNomina)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaNomina.subscribe(resultado => {
      expect(1).toBe(resultado.length);
  });});

});
