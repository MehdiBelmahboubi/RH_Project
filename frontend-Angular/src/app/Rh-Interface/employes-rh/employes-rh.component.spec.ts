import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployesRhComponent } from './employes-rh.component';

describe('EmployesRhComponent', () => {
  let component: EmployesRhComponent;
  let fixture: ComponentFixture<EmployesRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployesRhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployesRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
