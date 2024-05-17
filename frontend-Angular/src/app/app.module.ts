import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatButton, MatButtonModule} from "@angular/material/button";
import { HomeTemplateComponent } from './User-Interface/home/home-template.component';
import { LoginComponent } from './User-Interface/login/login.component';
import { CandidatureComponent } from './User-Interface/candidature/candidature.component';
import { EmployesComponent } from './Admin-Interface/employes/employes.component';
import { RhComponent } from './Admin-Interface/rh/rh.component';
import { DepartementComponent } from './Admin-Interface/departement/departement.component';
import { SettingComponent } from './Admin-Interface/setting/setting.component';
import {MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule} from "@angular/material/sidenav";
import {MatList, MatListItem, MatListModule} from "@angular/material/list";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './Admin-Interface/sidenav/sidenav.component';
import { SidenavRhComponent } from './Rh-Interface/sidenav-rh/sidenav-rh.component';
import { EmployesRhComponent } from './Rh-Interface/employes-rh/employes-rh.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthorizationGuard } from './guards/authorization.guard';
import { MatDividerModule } from '@angular/material/divider';
import { DashboardRhComponent } from './Rh-Interface/dashboard-rh/dashboard-rh.component';
import { VacationsRhComponent } from './Rh-Interface/vacations-rh/vacations-rh.component';
import { RecrutementsRhComponent } from './Rh-Interface/recrutements-rh/recrutements-rh.component';
import { TachesRhComponent } from './Rh-Interface/taches-rh/taches-rh.component';
import { HoraireRhComponent } from './Rh-Interface/horaire-rh/horaire-rh.component';
import { ProfileRhComponent } from './Rh-Interface/profile-rh/profile-rh.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeTemplateComponent,
    LoginComponent,
    CandidatureComponent,
    HeaderComponent,
    EmployesComponent,
    RhComponent,
    DepartementComponent,
    SettingComponent,
    SidenavComponent,
    SidenavRhComponent,
    EmployesRhComponent,
    DashboardRhComponent,
    VacationsRhComponent,
    RecrutementsRhComponent,
    TachesRhComponent,
    HoraireRhComponent,
    ProfileRhComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatDrawerContainer,
        MatDrawer,
        MatListModule,
        MatListItem,
        MatSidenavModule,
        MatIconModule,
        MatDividerModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [
    provideAnimationsAsync(),AuthGuard,AuthorizationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
