import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
import { HomeTemplateComponent } from './User-Interface/home/home-template.component';
import { LoginComponent } from './User-Interface/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { CandidatureComponent } from './User-Interface/candidature/candidature.component';
import { EmployesComponent } from './Admin-Interface/employes/employes.component';
import { RhComponent } from './Admin-Interface/rh/rh.component';
import { DepartementComponent } from './Admin-Interface/departement/departement.component';
import { SettingComponent } from './Admin-Interface/setting/setting.component';
import {MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule} from "@angular/material/sidenav";
import {MatList, MatListItem, MatListModule} from "@angular/material/list";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './Admin-Interface/sidenav/sidenav.component';
import { SidenavRhComponent } from './Rh-Interface/sidenav-rh/sidenav-rh.component';
import { EmployesRhComponent } from './Rh-Interface/employes-rh/employes-rh.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './guards/auth.guard';
import { AuthorizationGuard } from './guards/authorization.guard';
import { MatDividerModule } from '@angular/material/divider';
import { DashboardRhComponent } from './Rh-Interface/dashboard-rh/dashboard-rh.component';
import { VacationsRhComponent } from './Rh-Interface/vacations-rh/vacations-rh.component';
import { RecrutementsRhComponent } from './Rh-Interface/recrutements-rh/recrutements-rh.component';
import { TachesRhComponent } from './Rh-Interface/taches-rh/taches-rh.component';
import { HoraireRhComponent } from './Rh-Interface/horaire-rh/horaire-rh.component';
import { ProfileRhComponent } from './Rh-Interface/profile-rh/profile-rh.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {
  MatCell,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable, MatTableModule
} from "@angular/material/table";
import {MatSort, MatSortHeader, MatSortModule} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import { JwtInterceptor } from './interceptor/jwt-interceptor.interceptor';
import { DashboardEmplComponent } from './Employes-Interface/dashboard-empl/dashboard-empl.component';
import { SidenavEmplComponent } from './Employes-Interface/sidenav-empl/sidenav-empl.component';
import { AddEditEmployesComponent } from './Rh-Interface/employes-rh/add-edit-employes/add-edit-employes.component';
import { MatDialog, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { MatStepperModule }  
    from '@angular/material/stepper'
import { MatFormFieldModule, MatPrefix } from '@angular/material/form-field';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatOptionModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


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
    DashboardEmplComponent,
    SidenavEmplComponent,
    AddEditEmployesComponent,
    DashboardEmplComponent,
    SidenavEmplComponent,
    EmployesComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    MatInputModule,
    MatDividerModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatSortModule,
    MatSortHeader,
    MatSort,
    MatPaginator,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDialogTitle,
    MatDialogContent,
    MatDatepickerModule,
    MatDatepicker,
    MatOptionModule,
    MatSelectModule,
    MatPrefix,
    MatIconButton
  ],
  providers: [
    provideAnimationsAsync(),AuthGuard,AuthorizationGuard,
    provideNativeDateAdapter(),
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {provide: STEPPER_GLOBAL_OPTIONS,useValue: {displayDefaultIndicatorType: false},}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
