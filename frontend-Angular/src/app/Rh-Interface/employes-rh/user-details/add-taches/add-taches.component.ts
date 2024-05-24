import { Component, Inject, OnInit } from '@angular/core';
import { TachesService } from '../../../../service/taches.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TachesRequest } from '../../../../models/taches-request';
import { MessageResponse } from '../../../../models/message-response';


@Component({
  selector: 'app-add-taches',
  templateUrl: './add-taches.component.html',
  styleUrl: './add-taches.component.css'
})
export class AddTachesComponent implements OnInit{
  cin!: string ;
  errorMessage: string | null = null;
  validation: string | null = null;
  tachesFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private tachesService: TachesService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.tachesFormGroup = this._formBuilder.group({
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    let dateDebut: Date = new Date(this.tachesFormGroup.value.dateDebut);
    let dateFin: Date = new Date(this.tachesFormGroup.value.dateDebut);
    let dateDebutFormat: string = dateDebut.getDate() + "/" + (dateDebut.getMonth() + 1) + "/" + dateDebut.getFullYear();
    let dateFinFormat: string = dateFin.getDate() + "/" + (dateFin.getMonth() + 1) + "/" + dateFin.getFullYear();
    this.cin = this.data.cin;
    let tachesRequest: TachesRequest = {
      employes:this.cin,
      dateDebut: dateDebutFormat,
      dateFin: dateFinFormat,
      description: this.tachesFormGroup.value.description,
    };
    if(this.cin){
      this.tachesService.createTaches(tachesRequest).subscribe({
        next: (response: MessageResponse) => {
          this.validation = response.message;
          alert(this.validation);
          window.location.reload();
        },
        error: () => {
          this.errorMessage = "Error Adding";
          alert(this.errorMessage);
        }
      });
    }
  }

}
