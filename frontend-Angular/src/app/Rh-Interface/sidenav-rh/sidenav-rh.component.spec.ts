import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavRhComponent } from './sidenav-rh.component';

describe('SidenavRhComponent', () => {
  let component: SidenavRhComponent;
  let fixture: ComponentFixture<SidenavRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavRhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
