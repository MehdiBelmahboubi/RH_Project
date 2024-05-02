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
import { UserComponent } from './User-Interface/user/user.component';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect, MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import { AdminComponent } from './Admin-Interface/admin/admin.component';
import { EmployesComponent } from './Admin-Interface/employes/employes.component';
import { RhComponent } from './Admin-Interface/rh/rh.component';
import { DepartementComponent } from './Admin-Interface/departement/departement.component';
import { SettingComponent } from './Admin-Interface/setting/setting.component';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatList, MatListItem, MatListModule} from "@angular/material/list";
import {MatIcon, MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,
    HomeTemplateComponent,
    LoginComponent,
    CandidatureComponent,
    UserComponent,
    AdminComponent,
    EmployesComponent,
    RhComponent,
    DepartementComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatDrawerContainer,
    MatDrawer,
    MatListModule,
    MatListItem,
    MatDrawerContent,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
