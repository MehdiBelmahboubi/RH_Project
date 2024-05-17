import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationsRhComponent } from './vacations-rh.component';

describe('VacationsRhComponent', () => {
  let component: VacationsRhComponent;
  let fixture: ComponentFixture<VacationsRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacationsRhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationsRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
