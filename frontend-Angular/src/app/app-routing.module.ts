import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeTemplateComponent} from "./home/home-template.component";
import {LoginComponent} from "./login/login.component";
import {CandidatureComponent} from "./candidature/candidature.component";


const routes: Routes = [
  {path:"",component:HomeTemplateComponent},
  {path:"home",component:HomeTemplateComponent},
  {path:"login",component:LoginComponent},
  {path:"candidature",component:CandidatureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
