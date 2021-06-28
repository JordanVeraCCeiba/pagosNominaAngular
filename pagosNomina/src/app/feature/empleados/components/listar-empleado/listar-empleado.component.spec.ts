import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarEmpleadoComponent } from './listar-empleado.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EmpleadoService } from '../../shared/service/empleado.service';
import { Empleado } from '../../shared/model/empleado';
import { HttpService } from 'src/app/core/services/http.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

describe('ListarEmpleadoComponent', () => {
  let component: ListarEmpleadoComponent;
  let fixture: ComponentFixture<ListarEmpleadoComponent>;
  let empleadoService: EmpleadoService;
  const listaEmpleado: Empleado[] = [new Empleado('Jordan', "Vera",1090506292, "25/03/1997", 2000000,"Arquitecto Desarrollador")];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEmpleadoComponent],
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
    fixture = TestBed.createComponent(ListarEmpleadoComponent);
    component = fixture.componentInstance;
    empleadoService = TestBed.inject(EmpleadoService);
    spyOn(empleadoService, 'consultar').and.returnValue(
      of(listaEmpleado)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaEmpleados.subscribe(resultado => {
      expect(1).toBe(resultado.length);
  });
});

});
