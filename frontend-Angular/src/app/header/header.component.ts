import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userName: string | null = null;
  sidenavService:any;


  constructor(private router : Router) {
  }


  isLoggedIn(): boolean {
    this.userName = localStorage.getItem('nom');
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('nom');
    localStorage.removeItem('role');
    localStorage.removeItem('fonction');
    localStorage.removeItem('prenom');
    localStorage.removeItem('departement');
    this.router.navigate(['home']);
  }
}
