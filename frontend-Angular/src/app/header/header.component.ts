import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userName: string | null = null;

  constructor(private router : Router,) {
    this.userName = localStorage.getItem('nom');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('nom');
    this.router.navigate(['home']);
  }
}
