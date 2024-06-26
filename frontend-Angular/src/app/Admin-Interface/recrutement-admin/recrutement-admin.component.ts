import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Router} from "@angular/router";
import {Recrutement} from "../../models/recrutement";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {CandidatureService} from "../../service/candidature.service";
import {MatDialog} from "@angular/material/dialog";
import {MessageResponse} from "../../models/message-response";
import {PdfViewerComponent} from "../../Rh-Interface/recrutements-rh/pdf-viewer/pdf-viewer.component";

@Component({
  selector: 'app-recrutement-admin',
  templateUrl: './recrutement-admin.component.html',
  styleUrl: './recrutement-admin.component.css'
})
export class RecrutementAdminComponent implements OnInit{

  departement: string | null = null;
  errorMessage: string | null = null;
  validation: string | null = null;
  cin: string | null = null;
  data:any;
  recrutements!: Array<Recrutement>;
  recrutementsDataSource!: MatTableDataSource<Recrutement>;
  displayedrecrutementsColumns: string[] = ['nom', 'prenom', 'email', 'etat', 'cv', 'lettreMotivation', 'accepter', 'refuser'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private candidatService: CandidatureService, private dialog: MatDialog) { }

  ngOnInit(): void {
      this.candidatService.getAllCandidat().subscribe({
        next: value => {
          this.recrutements = value;
          this.recrutementsDataSource = new MatTableDataSource<Recrutement>(this.recrutements);
          this.recrutementsDataSource.paginator = this.paginator;
          this.recrutementsDataSource.sort = this.sort;
        },
        error: (err) => {
          console.error('Error fetching Conges:', err);
        }
      });
  }


  accepteCandidat(user: Recrutement) {
    if (user.id) {
      this.candidatService.accepteCandidat(user.id).subscribe({
        next: (response: MessageResponse) => {
          this.validation = response.message;
          alert(this.validation);
          window.location.reload();
        },
        error: () => {
          this.errorMessage = "Error Accepting";
          alert(this.errorMessage);
        }
      });
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.recrutementsDataSource.filter = filterValue.trim().toLowerCase();
  }

  createFilter(): (data: Recrutement, filter: string) => boolean {
    return (data: Recrutement, filter: string): boolean => {
      const searchTerm = filter.toLowerCase();
      return data.nom.toLowerCase().includes(searchTerm) ||
        data.prenom.toLowerCase().includes(searchTerm) ||
        data.email.toLowerCase().includes(searchTerm);
    };
  }

  refuserCandidat(user: Recrutement) {
    if (user.id) {
      this.candidatService.deleteCandidat(user.id).subscribe({
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

  openLettre(user: Recrutement) {
    this.data=user.lettreMotivation;
    this.dialog.open(PdfViewerComponent, {
      data: this.data,
      width: '1000px'
    });
  }

  openCv(user: Recrutement): void {
    this.data=user.cv;
    this.dialog.open(PdfViewerComponent, {
      data: this.data,
      width: '1000px'
    });
  }
}
