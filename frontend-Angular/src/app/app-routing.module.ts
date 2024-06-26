import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeTemplateComponent} from "./User-Interface/home/home-template.component";
import {LoginComponent} from "./User-Interface/login/login.component";
import {CandidatureComponent} from "./User-Interface/candidature/candidature.component";
import { SidenavComponent } from './Admin-Interface/sidenav/sidenav.component';
import { SidenavRhComponent } from './Rh-Interface/sidenav-rh/sidenav-rh.component';
import { EmployesRhComponent } from './Rh-Interface/employes-rh/employes-rh.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthorizationGuard } from './guards/authorization.guard';
import { DashboardRhComponent } from './Rh-Interface/dashboard-rh/dashboard-rh.component';
import { VacationsRhComponent } from './Rh-Interface/vacations-rh/vacations-rh.component';
import { RecrutementsRhComponent } from './Rh-Interface/recrutements-rh/recrutements-rh.component';
import { TachesRhComponent } from './Rh-Interface/taches-rh/taches-rh.component';
import { HoraireRhComponent } from './Rh-Interface/horaire-rh/horaire-rh.component';
import { ProfileRhComponent } from './Rh-Interface/profile-rh/profile-rh.component';
import { SidenavEmplComponent } from './Employes-Interface/sidenav-empl/sidenav-empl.component';
import { DashboardEmplComponent } from './Employes-Interface/dashboard-empl/dashboard-empl.component';
import { TachesEmplComponent } from './Employes-Interface/taches-empl/taches-empl.component';
import { HoraireEmplComponent } from './Employes-Interface/horaire-empl/horaire-empl.component';
import { VacationsEmplComponent } from './Employes-Interface/vacations-empl/vacations-empl.component';
import { ProfileEmplComponent } from './Employes-Interface/profile-empl/profile-empl.component';
import { DashboardAdminComponent } from './Admin-Interface/dashboard-admin/dashboard-admin.component';
import { RhAdminComponent } from './Admin-Interface/rh-admin/rh-admin.component';
import { RecrutementAdminComponent } from './Admin-Interface/recrutement-admin/recrutement-admin.component';
import {ProfilAdminComponent } from './Admin-Interface/profil-admin/profil-admin.component';
const routes: Routes = [
  {path:"",component:HomeTemplateComponent},
  {path:"home",component:HomeTemplateComponent},
  {path:"login",component:LoginComponent},
  {path:"candidature",component:CandidatureComponent},

  {path:"GsAdmin",component:SidenavComponent,
  canActivate:[AuthGuard,AuthorizationGuard],data : {role : "ADMIN"},
  children:[
    { path: "dashboard", component: DashboardAdminComponent },
    { path: "rh", component: RhAdminComponent },
    { path: "recrutement", component: RecrutementAdminComponent },
    { path: "profil", component: ProfilAdminComponent },
  ]},

  {path:"GsRh",component:SidenavRhComponent,
  canActivate:[AuthGuard,AuthorizationGuard],data : {role : "RH"},
  children:[
    { path: "dashboard", component: DashboardRhComponent },
    {path: "employes", component: EmployesRhComponent},
    {path: "vacations",component:VacationsRhComponent},
    {path:"recrutements",component:RecrutementsRhComponent},
    {path:"taches",component:TachesRhComponent},
    {path:"horaire",component:HoraireRhComponent},
    {path:"profile",component:ProfileRhComponent},
  ]},
  {path:"GsEmployes",component:SidenavEmplComponent,
  canActivate:[AuthGuard,AuthorizationGuard],data : {role : "EMPLOYE" },
  children:[
    {path:"dashboard",component:DashboardEmplComponent},
    {path:"taches",component:TachesEmplComponent},
    {path:"horaire",component:HoraireEmplComponent},
    {path:"vacations",component:VacationsEmplComponent},
    {path:"profile",component:ProfileEmplComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
