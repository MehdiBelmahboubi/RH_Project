import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutementAdminComponent } from './recrutement-admin.component';

describe('RecrutementAdminComponent', () => {
  let component: RecrutementAdminComponent;
  let fixture: ComponentFixture<RecrutementAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecrutementAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecrutementAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
