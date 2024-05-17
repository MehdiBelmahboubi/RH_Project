import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachesRhComponent } from './taches-rh.component';

describe('TachesRhComponent', () => {
  let component: TachesRhComponent;
  let fixture: ComponentFixture<TachesRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TachesRhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TachesRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
