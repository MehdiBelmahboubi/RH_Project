import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { HoraireRequest } from '../../../models/horaire-request';
import { HoraireService } from '../../../service/horaire.service';
import { MessageResponse } from '../../../models/message-response';
import { PopupComponent } from '../../../popup/popup.component';

@Component({
  selector: 'app-add-horaire-dialog-component',
  templateUrl: './add-horaire-dialog-component.component.html',
  styleUrl: './add-horaire-dialog-component.component.css'
})
export class AddHoraireDialogComponentComponent implements OnInit{
  cin: string | null = null;
  errorMessage: string | null = null;
  validation: string | null = null;
  horaireFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder,
     private horaireService:HoraireService,
     private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) { }

  

  ngOnInit(): void {
    this.horaireFormGroup = this.formBuilder.group({
      horaire: ['', Validators.required]
    })
  }

  onSubmit() {
    this.cin=localStorage.getItem('cin');
    let horaireRequest: HoraireRequest = {
      employes: this.cin,
      heureTravaille: this.horaireFormGroup.value.horaire
    }
    if(this.cin){
      this.horaireService.addHoraire(horaireRequest).subscribe({
        next: (response: MessageResponse) => {
          this.dialog.open(PopupComponent, {
            data: response.message,
            width: '300px'
          });
        },
        error: () => {
          this.errorMessage = "Error Adding";
          alert(this.errorMessage);
        }
      });
    }
  
  }
}
