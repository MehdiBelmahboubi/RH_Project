import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../models/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmployesService } from '../../../service/employes.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddEditEmployesComponent } from '../../../Rh-Interface/employes-rh/add-edit-employes/add-edit-employes.component';
import { MessageResponse } from '../../../models/message-response';
import { UserDetailsComponent } from '../../../Rh-Interface/employes-rh/user-details/user-details.component';

@Component({
  selector: 'app-rh-employees',
  templateUrl: './rh-employees.component.html',
  styleUrl: './rh-employees.component.css'
})
export class RhEmployeesComponent implements OnInit{
  errorMessage: string | null = null;
  validation: string | null = null;
  users! : Array<User>;
  employesDataSource! : MatTableDataSource<User>;
  displayedColumns : string[] = ['cin','nom','prenom','dateNsc','telephone','email','contrat','fonction','salaire','cnss','dateRecrutement','modifier','supprimer','details'];
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  constructor(private employesService : EmployesService,private dialog : MatDialog,private router:Router,@Inject(MAT_DIALOG_DATA) public data: any){
  }

  ngOnInit(): void {
    this.employesService.getEmployesByRh(this.data.cin).subscribe({
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

  openUserDetails(data: any) {
    this.dialog.open(UserDetailsComponent,{data,width:'1800px'})
  }
}
