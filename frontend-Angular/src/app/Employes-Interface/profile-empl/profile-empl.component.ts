import { Component, OnInit } from '@angular/core';
import { EmployesService } from '../../service/employes.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile-empl',
  templateUrl: './profile-empl.component.html',
  styleUrls: ['./profile-empl.component.css']
})
export class ProfileEmplComponent implements OnInit{
  cin: string | null = null;
  nom: string | null = null;
  prenom: string | null = null;
  fonction: string | null = null;
  photo: string | null = null;
  dateNaissance: string | null = null;
  telephone: number | null = null;
  email: string | null = null;
  contrat: string | null = null;
  salaire: number | null = null;
  cnss: string | null = null;
  dateRecrutement: string | null = null;
  constructor(private employesService : EmployesService,private sanitizer: DomSanitizer,private dialog : MatDialog,private router:Router){
  }


  ngOnInit(): void {
    this.cin = localStorage.getItem('cin');
    this.employesService.getByCin(this.cin).subscribe({
      next: value => {
        this.nom = value.nom;
        this.prenom = value.prenom;
        this.fonction = value.fonction;
        this.photo = value.photo;
        this.dateNaissance=value.dateNsc;
        this.telephone=value.telephone;
        this.email=value.email;
        this.contrat=value.contrat;
        this.salaire=value.salaire;
        this.cnss=value.cnss;
        this.dateRecrutement=value.dateRecrutement;
      },
      error: err => {
        console.error('Error fetching employees:', err);
      }
    });
  }

  changePassword() {
  }

  getPhotoUrl() {
    return this.sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${this.photo}`);
  }
}

