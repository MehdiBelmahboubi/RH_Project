import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidatureService } from '../../service/candidature.service';
import { CandidatRequest } from '../../models/candidatRequest';
import { CandidateResponse } from '../../models/CandidateResponse';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrl: './candidature.component.css'
})
export class CandidatureComponent {
  formcandidature!: FormGroup;
  errorMessage: string | null = null;
  validation: string | null = null;
  cvName: string | null = null;
  lettreMotivationName: string | null = null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private cadidatureservice: CandidatureService) { }

  ngOnInit(): void {
    this.formcandidature = this.fb.group({
      nom: this.fb.control(""),
      prenom: this.fb.control(""),
      email: this.fb.control(""),
      departement: this.fb.control(""),
      cv: [null],
      lettreMotivation: [null]
    })
  }

  selectFile(event: any, controlName: string) {
    const file = event.target.files[0];
    if (file) {
      this.formcandidature.patchValue({
        [controlName]: file
      });
      if (controlName === 'cv') {
        this.cvName = file.name;
      } else if (controlName === 'lettreMotivation') {
        this.lettreMotivationName = file.name;
      }
    }
  }

  submitcandidat() {
    const formData = new FormData();
    formData.set('nom', this.formcandidature.value.nom)
    formData.set('prenom', this.formcandidature.value.prenom);
    formData.set('email', this.formcandidature.value.email);
    formData.set('departement', this.formcandidature.value.departement);
    formData.set('cv', this.formcandidature.value.cv);
    formData.set('lettreMotivation', this.formcandidature.value.lettreMotivation);

    this.cadidatureservice.createcandidature(formData).subscribe({
      next: (response: CandidateResponse) => {
        this.validation = response.message;
        alert(this.validation);
      },
      error: () => {
        this.errorMessage = "Retry Again";
        alert(this.errorMessage);
      }
    })
  }
}
