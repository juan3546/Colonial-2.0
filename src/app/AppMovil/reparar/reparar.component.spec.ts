import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepararComponent } from './reparar.component';

describe('RepararComponent', () => {
  let component: RepararComponent;
  let fixture: ComponentFixture<RepararComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepararComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepararComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
