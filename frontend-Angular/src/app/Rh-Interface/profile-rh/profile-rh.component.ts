import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-rh',
  templateUrl: './profile-rh.component.html',
  styleUrls: ['./profile-rh.component.css']
})
export class ProfileRhComponent {

  rh = {
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


  newEmail: string = '';
  oldPassword: string = '';
  newPassword: string = '';


  saveProfile() {

  }


  changePassword() {

  }

  changeEmail() {

  }
}
