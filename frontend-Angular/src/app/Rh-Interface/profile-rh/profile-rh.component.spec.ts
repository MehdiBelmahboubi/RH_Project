import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRhComponent } from './profile-rh.component';

describe('ProfileRhComponent', () => {
  let component: ProfileRhComponent;
  let fixture: ComponentFixture<ProfileRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileRhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
