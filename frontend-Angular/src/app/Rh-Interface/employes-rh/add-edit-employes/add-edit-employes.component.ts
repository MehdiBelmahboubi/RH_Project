import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRequest } from '../../../models/user-request';
import { EmployesService } from '../../../service/employes.service';
import { MessageResponse } from '../../../models/message-response';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../../popup/popup.component';

interface Contrat {
  value: string;
  viewValue: string;
}

interface Fonction {
  value: string;
  viewValue: string;
}

interface departement {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-edit-employes',
  templateUrl: './add-edit-employes.component.html',
  styleUrl: './add-edit-employes.component.css'
})


export class AddEditEmployesComponent implements OnInit {
  hide = true;
  isRH!: boolean;
  Photo!: File;
  errorMessage: string | null = null;
  validation: string | null = null;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  contrats: Contrat[] = [
    { value: 'CDI', viewValue: 'CDI' },
    { value: 'CDD', viewValue: 'CDD' },
    { value: 'FREELANCE', viewValue: 'FREELANCE' },
  ];
  departements: departement[] = [
    { value: 'Informatique', viewValue: 'Informatique' },
    { value: 'RH', viewValue: 'RH' },
  ];
  fonctions: Fonction[] = [
    { value: 'Chef', viewValue: 'Chef' },
    { value: 'Ingenieur', viewValue: 'Ingenieur' },
    { value: 'Technicien', viewValue: 'Technicien' },
    { value: 'Rh', viewValue: 'Rh' },
  ];


  constructor(private _formBuilder: FormBuilder,
    private employesService: EmployesService,
    private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.isRH = localStorage.getItem('role') === 'RH';

    this.firstFormGroup = this._formBuilder.group({
      cin: [{ value: '', disabled: !!this.data }, Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^(?:\+212|0)[5-7]\d{8}$/)]],
      photo: this._formBuilder.control(''),
      dateNsc: ['', Validators.required],
      photoName: this._formBuilder.control('')
    });
    this.secondFormGroup = this._formBuilder.group({
      cnss: ['', Validators.required],
      dateRecrutement: ['', Validators.required],
      salaire: ['', Validators.required],
      contrat: ['', Validators.required],
      fonction: ['', Validators.required],
      departement: ['',Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    if (this.data) {
      this.firstFormGroup.patchValue({
        ...this.data,
        dateNsc: this.formatDate(this.data.dateNsc),
      });

      this.secondFormGroup.patchValue({
        ...this.data,
        dateRecrutement: this.formatDate(this.data.dateRecrutement)
      });
    }
  }

  formatDate(date: any): string {
    if (!date) return '';
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('/');
  }

  onSubmit() {
    let dateNsc: Date = new Date(this.firstFormGroup.value.dateNsc);
    let dateRecrutement: Date = new Date(this.secondFormGroup.value.dateRecrutement);
    let dateNscFormat: string = dateNsc.getDate() + "/" + (dateNsc.getMonth() + 1) + "/" + dateNsc.getFullYear();
    let dateRecrutementFormat: string = dateRecrutement.getDate() + "/" + (dateRecrutement.getMonth() + 1) + "/" + dateRecrutement.getFullYear();
    if (this.data) {
      const formData2 = new FormData();
      formData2.set('cnss', this.secondFormGroup.value.cnss);
      formData2.set('contrat', this.secondFormGroup.value.contrat);
      formData2.set('dateNsc', dateNscFormat);
      formData2.set('dateRecrutement', dateRecrutementFormat);
      formData2.set('email', this.thirdFormGroup.value.email);
      formData2.set('fonction', this.secondFormGroup.value.fonction);
      formData2.set('nom', this.firstFormGroup.value.nom);
      formData2.set('password', this.thirdFormGroup.value.password);
      formData2.set('prenom', this.firstFormGroup.value.prenom);
      formData2.set('salaire', this.secondFormGroup.value.salaire);
      formData2.set('telephone', this.firstFormGroup.value.telephone);
      if(this.data.role==='EMPLOYE'){
        formData2.set('departement', localStorage.getItem('departement') || '');
        formData2.set('role', 'EMPLOYE');
      }else{
        formData2.set('departement', this.secondFormGroup.value.departement);
        formData2.set('role', 'RH');
      }
      formData2.set('photo', this.Photo);
      this.employesService.modifyUser(formData2, this.data.cin).subscribe({
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
      })
    } else {
      const formData = new FormData();
      formData.set('cin', this.firstFormGroup.value.cin);
      formData.set('cnss', this.secondFormGroup.value.cnss);
      formData.set('contrat', this.secondFormGroup.value.contrat);
      formData.set('dateNsc', dateNscFormat);
      formData.set('dateRecrutement', dateRecrutementFormat);
      formData.set('email', this.thirdFormGroup.value.email);
      formData.set('fonction', this.secondFormGroup.value.fonction);
      formData.set('nom', this.firstFormGroup.value.nom);
      formData.set('password', this.thirdFormGroup.value.password);
      formData.set('prenom', this.firstFormGroup.value.prenom);
      formData.set('salaire', this.secondFormGroup.value.salaire);
      formData.set('telephone', this.firstFormGroup.value.telephone);
      if(localStorage.getItem('role')==='RH')
        {
          formData.set('departement', localStorage.getItem('departement') || '');
          formData.set('role', 'EMPLOYE');
        }else{
          formData.set('departement', this.secondFormGroup.value.departement);
          formData.set('role', 'RH');
        }
      formData.set('photo', this.Photo);
      this.employesService.addUser(formData).subscribe({
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
      })
    }
  }

  selectPhoto(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.Photo = file;
      this.firstFormGroup.patchValue({
        photo: file,
        photoName: file.name
      })
    }
  }
}
