import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEmplComponent } from './dashboard-empl.component';

describe('DashboardEmplComponent', () => {
  let component: DashboardEmplComponent;
  let fixture: ComponentFixture<DashboardEmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardEmplComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardEmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
