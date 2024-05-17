import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticateResponse} from "../../models/AuthenticateResponse";
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formLogin! : FormGroup;
  errorMessage: string | null = null;

  constructor(private fb : FormBuilder,
    private router : Router,
    private loginservice : LoginService) {}

  ngOnInit():void{
    this.formLogin=this.fb.group({
      email : this.fb.control(""),
      password : this.fb.control("")
    })
  }

  hadleLogin() {
    let email = this.formLogin.value.email;
    let password = this.formLogin.value.password;
    this.loginservice.login(email,password).subscribe({
      next: (response: AuthenticateResponse) => {
        localStorage.setItem('token',response.token);
        localStorage.setItem('nom',response.nom);
        localStorage.setItem('prenom',response.prenom);
        localStorage.setItem('fonction',response.fonction);
        localStorage.setItem('role',response.role);
        var Role = response.role;
        if(Role=="EMPLOYE")
          {
            this.router.navigate(['GsEmployes']);
          }
          else if(Role=="RH")
            {
              this.router.navigate(['GsRh']);
            }
            else{
              this.router.navigate(['GsAdmin']);
            }
      },
      error: () => {
        this.errorMessage = "Invalid email or password. Please try again.";
      }
    })
  }
}
