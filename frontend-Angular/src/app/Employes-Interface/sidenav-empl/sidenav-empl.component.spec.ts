import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavEmplComponent } from './sidenav-empl.component';

describe('SidenavEmplComponent', () => {
  let component: SidenavEmplComponent;
  let fixture: ComponentFixture<SidenavEmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavEmplComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavEmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
