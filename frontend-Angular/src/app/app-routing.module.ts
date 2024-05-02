import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeTemplateComponent} from "./User-Interface/home/home-template.component";
import {LoginComponent} from "./User-Interface/login/login.component";
import {CandidatureComponent} from "./User-Interface/candidature/candidature.component";
import {DepartementComponent} from "./Admin-Interface/departement/departement.component";
import {EmployesComponent} from "./Admin-Interface/employes/employes.component";
import {RhComponent} from "./Admin-Interface/rh/rh.component";


const routes: Routes = [
  {path:"",component:HomeTemplateComponent},
  {path:"home",component:HomeTemplateComponent},
  {path:"login",component:LoginComponent},
  {path:"candidature",component:CandidatureComponent},
  {path:"departement",component:DepartementComponent},
  {path:"employes",component:EmployesComponent},
  {path:"rh",component:RhComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
