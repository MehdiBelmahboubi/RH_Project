import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHoraireDialogComponentComponent } from './add-horaire-dialog-component.component';

describe('AddHoraireDialogComponentComponent', () => {
  let component: AddHoraireDialogComponentComponent;
  let fixture: ComponentFixture<AddHoraireDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddHoraireDialogComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddHoraireDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
