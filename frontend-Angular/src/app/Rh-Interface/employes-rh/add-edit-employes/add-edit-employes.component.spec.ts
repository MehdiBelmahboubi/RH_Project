import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmployesComponent } from './add-edit-employes.component';

describe('AddEditEmployesComponent', () => {
  let component: AddEditEmployesComponent;
  let fixture: ComponentFixture<AddEditEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditEmployesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
