import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhEmployeesComponent } from './rh-employees.component';

describe('RhEmployeesComponent', () => {
  let component: RhEmployeesComponent;
  let fixture: ComponentFixture<RhEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RhEmployeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
