import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrl: './profil-admin.component.css'
})
export class ProfilAdminComponent {

  admin = {
    nom: 'Admin',
    prenom: 'Admin',

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
