import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutementsRhComponent } from './recrutements-rh.component';

describe('RecrutementsRhComponent', () => {
  let component: RecrutementsRhComponent;
  let fixture: ComponentFixture<RecrutementsRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecrutementsRhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecrutementsRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
