import {Component, OnInit, ViewChild} from '@angular/core';
import { EmployesService } from '../../service/employes.service';
import {User} from "../../models/user";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import { MessageResponse } from '../../models/message-response';
import { MatDialog } from '@angular/material/dialog';
import { AddEditEmployesComponent } from './add-edit-employes/add-edit-employes.component';
import { SidenavEmplComponent } from '../../Employes-Interface/sidenav-empl/sidenav-empl.component';
import { Router } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-employes-rh',
  templateUrl: './employes-rh.component.html',
  styleUrl: './employes-rh.component.css'
})
export class EmployesRhComponent implements OnInit {
  errorMessage: string | null = null;
  validation: string | null = null;
  nom: string | null = null;
  users! : Array<User>;
  employesDataSource! : MatTableDataSource<User>;
  displayedColumns : string[] = ['cin','nom','prenom','dateNsc','telephone','email','contrat','fonction','salaire','cnss','dateRecrutement','modifier','supprimer','details'];
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  constructor(private employesService : EmployesService,private dialog : MatDialog,private router:Router){
  }

  ngOnInit(){
    this.nom = localStorage.getItem('departement');
    if (this.nom) {
      this.employesService.getEmployesByDepartement(this.nom).subscribe({
        next: value => {
          this.users = value;
          this.employesDataSource = new MatTableDataSource<User>(this.users);
          this.employesDataSource.paginator=this.paginator;
          this.employesDataSource.sort=this.sort;
        },
        error: (err) => {
          console.error('Error fetching employees:', err);
        }
      });
    } else {
      console.error('No department name found in localStorage');
    }
  }

  openEditForm(data:any) {
    this.dialog.open(AddEditEmployesComponent,{
      data,
      width: '1000px'});
    }


  deleteUser(user:User) {
    if(user.cin){
      this.employesService.deleteUser(user.cin).subscribe({
        next: (response : MessageResponse) => {
          this.validation=response.message;
          alert(this.validation);
          window.location.reload();
        },
        error:() =>{
          this.errorMessage = "Error Deleting";
          alert(this.errorMessage);
        }
      })
    }
  }

  openAddEditForm(){
    this.dialog.open(AddEditEmployesComponent,{width: '1000px'});
  }

  openUserDetails(data: any) {
    this.dialog.open(UserDetailsComponent,{data,width:'1400px'})
  }
}
