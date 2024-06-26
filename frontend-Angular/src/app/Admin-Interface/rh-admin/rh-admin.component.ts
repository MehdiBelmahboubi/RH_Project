import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {EmployesService} from "../../service/employes.service";
import {MatDialog} from "@angular/material/dialog";
import {AddEditEmployesComponent} from "../../Rh-Interface/employes-rh/add-edit-employes/add-edit-employes.component";
import {MessageResponse} from "../../models/message-response";
import {UserDetailsComponent} from "../../Rh-Interface/employes-rh/user-details/user-details.component";
import { RhEmployeesComponent } from './rh-employees/rh-employees.component';

@Component({
  selector: 'app-rh-admin',
  templateUrl: './rh-admin.component.html',
  styleUrls: ['./rh-admin.component.css']
})
export class RhAdminComponent implements OnInit{
  errorMessage: string | null = null;
  validation: string | null = null;
  nom: string | null = null;
  users!: Array<User>;
  employesDataSource!: MatTableDataSource<User>;
  displayedColumns: string[] = ['cin', 'nom', 'prenom', 'dateNsc', 'telephone', 'email', 'contrat', 'fonction', 'salaire', 'cnss', 'dateRecrutement', 'departement.nom', 'modifier', 'supprimer', 'details', 'employees'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private employesService: EmployesService, private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.employesService.getallRH().subscribe({
      next: value => {
        this.users = value;
        this.employesDataSource = new MatTableDataSource<User>(this.users);
        this.employesDataSource.paginator = this.paginator;
        this.employesDataSource.sort = this.sort;
        this.employesDataSource.filterPredicate = (data: User, filter: string) => {
          const transformedFilter = filter.trim().toLowerCase();
          const accumulator = (currentTerm: string, key: string) => {
            return currentTerm + data[key as keyof User];
          };
          const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
          return dataStr.indexOf(transformedFilter) !== -1;
        };
      },
      error: err => {
        console.error('Error fetching employees:', err);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.employesDataSource.filter = filterValue.trim().toLowerCase();
    if (this.employesDataSource.paginator) {
      this.employesDataSource.paginator.firstPage();
    }
  }

  openAddEditForm() {
    this.dialog.open(AddEditEmployesComponent, { width: '1000px' });
  }

  openEditForm(data: any) {
    this.dialog.open(AddEditEmployesComponent, {
      data,
      width: '1000px'
    });
  }

  deleteUser(user: User) {
    if (user.cin) {
      this.employesService.deleteUser(user.cin).subscribe({
        next: (response: MessageResponse) => {
          this.validation = response.message;
          alert(this.validation);
          window.location.reload();
        },
        error: () => {
          this.errorMessage = "Error Deleting";
          alert(this.errorMessage);
        }
      });
    }
  }

  openUserDetails(data: any) {
    this.dialog.open(UserDetailsComponent, { data, width: '1400px' });
  }

  openUserEmployees(data: any) {
    this.dialog.open(RhEmployeesComponent, { data, width: '1800px' });
  }
}
