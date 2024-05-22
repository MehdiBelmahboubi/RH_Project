import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rh-admin',
  templateUrl: './rh-admin.component.html',
  styleUrl: './rh-admin.component.css'
})
export class RhAdminComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  nom: string | null = null;
  prenom: string | null = null;
  fonction: string | null = null;

  constructor(private observer: BreakpointObserver, private router: Router) {}

  ngAfterViewInit() {
    this.nom = localStorage.getItem('nom');
    this.prenom = localStorage.getItem('prenom');
    this.fonction = localStorage.getItem('fonction');
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


}
