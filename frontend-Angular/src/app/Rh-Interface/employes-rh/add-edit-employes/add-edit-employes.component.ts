import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRequest } from '../../../models/user-request';
import { EmployesService } from '../../../service/employes.service';
import { MessageResponse } from '../../../models/message-response';

interface Contrat {
  value: string;
  viewValue: string;
}

interface Fonction {
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
  fonctions: Fonction[] = [
    { value: 'Chef', viewValue: 'Chef' },
    { value: 'Ingenieur', viewValue: 'Ingenieur' },
    { value: 'Technicien', viewValue: 'Technicien' },
  ];


  constructor(private _formBuilder: FormBuilder, private employesService: EmployesService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      cin: ['', Validators.required],
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
    });
    this.thirdFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    let dateNsc:Date = new Date(this.firstFormGroup.value.dateNsc);
    let dateRecrutement:Date = new Date(this.secondFormGroup.value.dateRecrutement);
    let dateNscFormat:string = dateNsc.getDate()+"/"+(dateNsc.getMonth()+1)+"/"+dateNsc.getFullYear();
    let dateRecrutementFormat:string = dateRecrutement.getDate()+"/"+(dateRecrutement.getMonth()+1)+"/"+dateRecrutement.getFullYear();
    const formData = new FormData();
    formData.set('cin', this.firstFormGroup.value.cin);
    formData.set('cnss', this.secondFormGroup.value.cnss);
    formData.set('contrat', this.secondFormGroup.value.contrat);
    formData.set('dateNsc', dateNscFormat);
    formData.set('dateRecrutement', dateRecrutementFormat);
    formData.set('departement', localStorage.getItem('departement') || '');
    formData.set('email', this.thirdFormGroup.value.email);
    formData.set('fonction', this.secondFormGroup.value.fonction);
    formData.set('nom', this.firstFormGroup.value.nom);
    formData.set('password', this.thirdFormGroup.value.password);
    formData.set('prenom', this.firstFormGroup.value.prenom);
    formData.set('salaire', this.secondFormGroup.value.salaire);
    formData.set('telephone', this.firstFormGroup.value.telephone);
    formData.set('role', 'EMPLOYE');
    formData.set('photo', this.Photo);

    this.employesService.addUser(formData).subscribe({
      next: (response: MessageResponse) => {
        this.validation = response.message;
        alert(this.validation);
        window.location.reload();
      },
      error: () => {
        this.errorMessage = "Error Adding";
        alert(this.errorMessage);
      }
    })
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
