import { Component, Inject, OnInit } from '@angular/core';
import { TachesService } from '../../../../service/taches.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface etat {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-taches',
  templateUrl: './add-taches.component.html',
  styleUrl: './add-taches.component.css'
})
export class AddTachesComponent implements OnInit{
  hide = true;
  isRH!: boolean;
  Photo!: File;
  errorMessage: string | null = null;
  validation: string | null = null;
  tachesFormGroup!: FormGroup;
  etats: etat[] = [
    { value: 'Encours', viewValue: 'Encours' },
    { value: 'Terminer', viewValue: 'Terminer' },
    { value: 'Terminer', viewValue: 'EnRetard' },
  ];

  constructor(private _formBuilder: FormBuilder,
    private tachesService: TachesService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.tachesFormGroup = this._formBuilder.group({
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      description: ['', Validators.required],
      etat: ['', Validators.required],
    });
  }

}
