import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimirCajasComponent } from './imprimir-cajas.component';

describe('ImprimirCajasComponent', () => {
  let component: ImprimirCajasComponent;
  let fixture: ComponentFixture<ImprimirCajasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprimirCajasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimirCajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
