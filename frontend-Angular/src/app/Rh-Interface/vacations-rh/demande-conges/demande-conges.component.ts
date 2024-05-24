import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CongesService } from '../../../service/conges.service';
import { CongeRequest } from '../../../models/conge-request';
import { MessageResponse } from '../../../models/message-response';



interface Type {
  value: string;
  viewValue: string
}

@Component({
  selector: 'app-demande-conges',
  templateUrl: './demande-conges.component.html',
  styleUrl: './demande-conges.component.css'
})
export class DemandeCongesComponent implements OnInit {
  cin: string | null = null;
  errorMessage: string | null = null;
  validation: string | null = null;
  congesFromGroup!: FormGroup;

  types: Type[] = [
    { value: 'Maladis', viewValue: 'Maladis' },
    { value: 'Voiyage', viewValue: 'Voiyage' },
    { value: 'Empechements', viewValue: 'Empechements' },
  ];


  constructor(private formbuilder: FormBuilder,
    private congesService: CongesService) { }

  ngOnInit(): void {
    this.congesFromGroup = this.formbuilder.group({
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      etat: ['', Validators.required],
      type: ['', Validators.required],
      periode: ['', Validators.required]
    })
  }

  onSubmit() {
    let dateDebut: Date = new Date(this.congesFromGroup.value.dateDebut);
    let dateFin: Date = new Date(this.congesFromGroup.value.dateFin);
    let dateDebutFormat: string = dateDebut.getDate() + "/" + (dateDebut.getMonth() + 1) + "/" + dateDebut.getFullYear();
    let dateFinFormat: string = dateFin.getDate() + "/" + (dateFin.getMonth() + 1) + "/" + dateFin.getFullYear();
    this.cin = localStorage.getItem('cin');
    let congeRequest: CongeRequest = {
      employes:this.cin,
      dateDebut: dateDebutFormat,
      dateFin: dateFinFormat,
      type: this.congesFromGroup.value.type,
      periode: this.congesFromGroup.value.periode
    };
    if(this.cin){
      this.congesService.createConge(congeRequest).subscribe({
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
