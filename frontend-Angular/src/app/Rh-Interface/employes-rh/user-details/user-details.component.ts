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
  displayedtachesColumns: string[] = ['dateDebut', 'dateFin', 'description', 'etat', 'modifier', 'supprimer'];
  displayedcongesColumns: string[] = ['dateDemande', 'dateDebut', 'dateFin', 'periode', 'type', 'etat', 'modifier', 'supprimer'];
  displayedhoraireColumns: string[] = ['heureTravaille', 'jour', 'modifier', 'supprimer'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private tachesService: TachesService,
    private congesService: CongesService,
    private horaireService :HoraireService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.cin = this.data.cin;
    if (this.cin) {
      this.tachesService.getTachesByEmployes(this.cin).subscribe({
        next: value => {
          this.taches = value;
          this.tachesDataSource = new MatTableDataSource<Taches>(this.taches);
          this.tachesDataSource.paginator = this.paginator;
          this.tachesDataSource.sort = this.sort;
        },
        error: (err) => {
          console.error('Error fetching Taches:', err);
        }
      });

      this.congesService.getCongesByEmployes(this.cin).subscribe({
        next: value => {
          this.conges = value;
          this.congesDataSource = new MatTableDataSource<Conges>(this.conges);
          this.congesDataSource.paginator = this.paginator;
          this.congesDataSource.sort = this.sort;
        },
        error: (err) => {
          console.error('Error fetching Conges:', err);
        }
      });

      this.horaireService.getHoraireByEmployes(this.cin).subscribe({
        next: value => {
          this.horaire = value;
          this.horaireDataSource = new MatTableDataSource<Horaire>(this.horaire);
          this.horaireDataSource.paginator = this.paginator;
          this.horaireDataSource.sort = this.sort;
        },
        error: (err) => {
          console.error('Error fetching Horaires:', err);
        }
      });
     } else {
      console.error('No Employee Was Found');
    }
  }
}
