import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraireEmplComponent } from './horaire-empl.component';

describe('HoraireEmplComponent', () => {
  let component: HoraireEmplComponent;
  let fixture: ComponentFixture<HoraireEmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoraireEmplComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoraireEmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
