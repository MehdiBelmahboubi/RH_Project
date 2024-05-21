import { Component, OnInit, ViewChild } from '@angular/core';
import { Recrutement } from '../../models/recrutement';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CandidatureService } from '../../service/candidature.service';
import { MessageResponse } from '../../models/message-response';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';

@Component({
  selector: 'app-recrutements-rh',
  templateUrl: './recrutements-rh.component.html',
  styleUrl: './recrutements-rh.component.css'
})
export class RecrutementsRhComponent implements OnInit {
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
    this.departement = localStorage.getItem('departement');
    if (this.departement) {
      this.candidatService.getCandidat(this.departement).subscribe({
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

  openCv(user: Recrutement): void {
    this.data=user.cv;
    this.dialog.open(PdfViewerComponent, {
      data: this.data,
      width: '1000px'
    });
  }

  openLettre(user: Recrutement) {
    this.data=user.lettreMotivation;
    this.dialog.open(PdfViewerComponent, {
      data: this.data,
      width: '1000px'
    });
  }
}
