import { Component } from '@angular/core';

@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css']
})
export class RhComponent {
  rhs = [
    { id: 1, nom: 'Spider', prenom: 'men', telephone: '123456789', cin: 'AB12345', email: 'spidermen@example.com', departement_id: 1 },
    { id: 2, nom: 'Spider', prenom: 'women', telephone: '987654321', cin: 'CD67890', email: 'spiderwomen@example.com', departement_id: 2 },

  ];

  editRH(rh: any): void {
    console.log('Modifier RH : ', rh);

  }

  deleteRH(id: number): void {
    console.log('Supprimer RH avec ID : ', id);

  }

  addRH(): void {
    console.log('Ajouter RH');

  }
}
