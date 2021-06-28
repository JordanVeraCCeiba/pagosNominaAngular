import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarNominaComponent } from './pagar-nomina.component';

describe('PagarNominaComponent', () => {
  let component: PagarNominaComponent;
  let fixture: ComponentFixture<PagarNominaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagarNominaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarNominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
