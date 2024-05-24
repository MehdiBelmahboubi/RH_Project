import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-empl',
  templateUrl: './profile-empl.component.html',
  styleUrls: ['./profile-empl.component.css']
})
export class ProfileEmplComponent {
  employee = {
    cin: '12345678',
    nom: 'lola',
    prenom: 'lme7loula',
    dateNaissance: '2002-01-01',
    telephone: '1234567890',
    email: 'lolalme7loula@mail.com',
    contrat: 'CDI',
    fonction: 'chef',
    salaire: '7000',
    cnss: '11223344',
    dateRecrutement: '2024-01-01'
  };

  oldPassword: string = '';
  newPassword: string = '';
  newEmail: string = '';

  saveProfile() {

  }

  changePassword() {

  }

  changeEmail() {

  }
}

