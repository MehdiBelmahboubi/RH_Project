import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEmplComponent } from './profile-empl.component';

describe('ProfileEmplComponent', () => {
  let component: ProfileEmplComponent;
  let fixture: ComponentFixture<ProfileEmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileEmplComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileEmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
