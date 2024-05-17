import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraireRhComponent } from './horaire-rh.component';

describe('HoraireRhComponent', () => {
  let component: HoraireRhComponent;
  let fixture: ComponentFixture<HoraireRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoraireRhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoraireRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
