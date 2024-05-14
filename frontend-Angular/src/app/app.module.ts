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
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatList, MatListItem, MatListModule} from "@angular/material/list";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './Admin-Interface/sidenav/sidenav.component';
import { SidenavRhComponent } from './Rh-Interface/sidenav-rh/sidenav-rh.component';
import { EmployesRhComponent } from './Rh-Interface/employes-rh/employes-rh.component';


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
        MatDrawerContent,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
