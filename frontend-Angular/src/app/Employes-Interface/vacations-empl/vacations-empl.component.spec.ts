import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationsEmplComponent } from './vacations-empl.component';

describe('VacationsEmplComponent', () => {
  let component: VacationsEmplComponent;
  let fixture: ComponentFixture<VacationsEmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacationsEmplComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationsEmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
