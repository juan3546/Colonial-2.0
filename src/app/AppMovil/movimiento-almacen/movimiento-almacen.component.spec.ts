import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoAlmacenComponent } from './movimiento-almacen.component';

describe('MovimientoAlmacenComponent', () => {
  let component: MovimientoAlmacenComponent;
  let fixture: ComponentFixture<MovimientoAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimientoAlmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
