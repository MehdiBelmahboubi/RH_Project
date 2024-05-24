import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EmployesService } from '../../../service/employes.service';
import { Taches } from '../../../models/taches';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TachesService } from '../../../service/taches.service';
import { Conges } from '../../../models/conges';
import { Horaire } from '../../../models/horaire';
import { CongesService } from '../../../service/conges.service';
import { HoraireService } from '../../../service/horaire.service';
import { MessageResponse } from '../../../models/message-response';
import { AddTachesComponent } from './add-taches/add-taches.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  errorMessage: string | null = null;
  validation: string | null = null;
  cin: string | null = null;
  taches!: Array<Taches>;
  conges!: Array<Conges>;
  horaire!: Array<Horaire>;
  tachesDataSource!: MatTableDataSource<Taches>;
  congesDataSource!: MatTableDataSource<Conges>;
  horaireDataSource!: MatTableDataSource<Horaire>;
  displayedtachesColumns: string[] = ['dateDebut', 'dateFin', 'description', 'etat'];
  displayedcongesColumns: string[] = ['dateDemande', 'dateDebut', 'dateFin', 'periode', 'type', 'etat', 'accepter', 'refuser'];
  displayedhoraireColumns: string[] = ['heureTravaille', 'jour'];
  @ViewChild('paginator1') paginator1!: MatPaginator;
  @ViewChild('paginator2') paginator2!: MatPaginator;
  @ViewChild('paginator3') paginator3!: MatPaginator;
  @ViewChild('sort1') sort1!: MatSort;
  @ViewChild('sort2') sort2!: MatSort;
  @ViewChild('sort3') sort3!: MatSort;

  constructor(private tachesService: TachesService,
    private congesService: CongesService,
    private horaireService: HoraireService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.cin = this.data.cin;
    if (this.cin) {
      this.tachesService.getTachesByEmployes(this.cin).subscribe({
        next: value => {
          this.taches = value;
          this.tachesDataSource = new MatTableDataSource<Taches>(this.taches);
          this.tachesDataSource.paginator = this.paginator1;
          this.tachesDataSource.sort = this.sort1;
        },
        error: (err) => {
          console.error('Error fetching Taches:', err);
        }
      });

      this.congesService.getCongesByEmployes(this.cin).subscribe({
        next: value => {
          this.conges = value;
          this.congesDataSource = new MatTableDataSource<Conges>(this.conges);
          this.congesDataSource.paginator = this.paginator2;
          this.congesDataSource.sort = this.sort2;
        },
        error: (err) => {
          console.error('Error fetching Conges:', err);
        }
      });

      this.horaireService.getHoraireByEmployes(this.cin).subscribe({
        next: value => {
          this.horaire = value;
          this.horaireDataSource = new MatTableDataSource<Horaire>(this.horaire);
          this.horaireDataSource.paginator = this.paginator3;
          this.horaireDataSource.sort = this.sort3;
        },
        error: (err) => {
          console.error('Error fetching Horaires:', err);
        }
      });
    } else {
      console.error('No Employee Was Found');
    }
  }

  refuserConge(conges: Conges) {
    this.congesService.refuserConges(conges.id).subscribe({
      next: (response: MessageResponse) => {
        this.validation = response.message;
        alert(this.validation);
        window.location.reload();
      },
      error: () => {
        this.errorMessage = "Error Declining";
        alert(this.errorMessage);
      }
    });
  }


  accepteConge(conges: Conges) {
    this.congesService.accepterConges(conges.id).subscribe({
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

  openAddTaches() {
    this.dialog.open(AddTachesComponent, {width: '1400px' })
  }
}
