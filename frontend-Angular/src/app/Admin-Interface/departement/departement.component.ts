import { Component } from '@angular/core';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent {
  departements = [
    { id: 1, rh_id: 101, nom: 'Ressources Humaines' },
    { id: 2, rh_id: 102, nom: 'Marketing' },
    { id: 3, rh_id: 103, nom: 'Finance' },
    { id: 4, rh_id: 103, nom: 'Computer science' },

  ];

  deleteDepartement(id: number): void {
    console.log('Supprimer le département avec ID : ', id);
  }

  editDepartement(id: number): void {
    console.log('Modifier le département avec ID : ', id);
  }


  addDepartement(): void {
    console.log('Ajouter un département');
  }
}
