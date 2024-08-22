import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderDevolverComponent } from './vender-devolver.component';

describe('VenderDevolverComponent', () => {
  let component: VenderDevolverComponent;
  let fixture: ComponentFixture<VenderDevolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderDevolverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderDevolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
