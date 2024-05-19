import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachesEmplComponent } from './taches-empl.component';

describe('TachesEmplComponent', () => {
  let component: TachesEmplComponent;
  let fixture: ComponentFixture<TachesEmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TachesEmplComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TachesEmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
