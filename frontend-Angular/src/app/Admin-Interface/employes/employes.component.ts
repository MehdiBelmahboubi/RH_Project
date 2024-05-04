import { Component } from '@angular/core';

interface Employee {
  nom: string;
  prenom: string;
  salaire: number;
  telephone: string;
  departement: string;
  contrat: string;
  fonction: string;
  password: string;
  cin: string;
  cnss: string;
  date_naissance: string;
  date_recrutement: string;
  email: string;
  departement_id: number;
}

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent {
  employes: Employee[] = [
    {
      nom: 'Bninou',
      prenom: 'hanae',
      salaire: 10000,
      telephone: '123456789',
      departement: 'Computer science',
      contrat: 'CDI',
      fonction: 'Ingénieur',
      password: '123456',
      cin: 'LK34567',
      cnss: '1234',
      date_naissance: '01/01/2000',
      date_recrutement: '01/01/2020',
      email: 'hanae@example.com',
      departement_id: 1
    },
    {
      nom: 'Belmahboubi',
      prenom: 'mehdi',
      salaire: 15000,
      telephone: '987654321',
      departement: 'Computer science',
      contrat: 'CDD',
      fonction: 'Chef de projet',
      password: 'abcdef',
      cin: 'JK98765',
      cnss: '5678',
      date_naissance: '05/05/2000',
      date_recrutement: '01/02/2019',
      email: 'mehdi@example.com',
      departement_id: 2
    },
    {
      nom: 'Lola',
      prenom: 'lme7loula',
      salaire: 6000,
      telephone: '097654321',
      departement: 'ressource humain',
      contrat: 'Freelance',
      fonction: 'Technicien',
      password: 'zkldef',
      cin: 'GM00765',
      cnss: '9764',
      date_naissance: '09/09/2000',
      date_recrutement: '01/02/2021',
      email: 'Lola@example.com',
      departement_id: 3,
    },
  ];

  searchText: string = '';

  get filteredEmployees() {
    return this.employes.filter(employee =>
      employee.nom.toLowerCase().includes(this.searchText.toLowerCase()) ||
      employee.prenom.toLowerCase().includes(this.searchText.toLowerCase()) ||
      employee.cin.toLowerCase().includes(this.searchText.toLowerCase()) ||
      employee.cnss.toLowerCase().includes(this.searchText.toLowerCase()) ||
      employee.departement_id.toString().includes(this.searchText.toLowerCase())
    );
  }

  deleteEmployee(cin: string): void {
    console.log('Supprimer : ', cin);
  }

  editEmployee(employee: Employee): void {
    console.log('Modifier : ', employee);
  }

  addEmployee(): void {
    console.log('Ajouter Employé');
  }
}
