import {Component, ViewChild} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { EmployesService } from '../../service/employes.service';

@Component({
  selector: 'app-sidenav-empl',
  templateUrl: './sidenav-empl.component.html',
  styleUrl: './sidenav-empl.component.css'
})
export class SidenavEmplComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  cin: string | null = null;
  nom: string | null = null;
  prenom: string | null = null;
  fonction: string | null = null;
  photo: string | null = null;

  constructor(private observer: BreakpointObserver, 
    private router: Router,
    private sanitizer: DomSanitizer,
    private employesService: EmployesService,) {}

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }


  ngOnInit(): void {
    this.cin = localStorage.getItem('cin');
    this.employesService.getByCin(this.cin).subscribe({
      next: value => {
        this.nom = value.nom;
        this.prenom = value.prenom;
        this.fonction = value.fonction;
        this.photo = value.photo;
      },
      error: err => {
        console.error('Error fetching employees:', err);
      }
    });
  }

  getPhotoUrl() {
    return this.sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${this.photo}`);
  }
}
