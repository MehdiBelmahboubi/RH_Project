import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Conges } from '../../models/conges';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CongesService } from '../../service/conges.service';
import { DemandeCongesComponent } from './demande-conges/demande-conges.component';

@Component({
  selector: 'app-vacations-rh',
  templateUrl: './vacations-rh.component.html',
  styleUrl: './vacations-rh.component.css'
})
export class VacationsRhComponent implements OnInit{
  errorMessage: string | null = null;
  validation: string | null = null;
  cin: string | null = null;
  conges! : Array<Conges>;
  congesDataSource!: MatTableDataSource<Conges>;
  displayedcongesColumns: string[] = ['dateDemande', 'dateDebut', 'dateFin', 'periode', 'type', 'etat'];
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor(private congesService: CongesService,
    private dialog: MatDialog){}

    ngOnInit(){
      this.cin = localStorage.getItem('cin');
      if(this.cin)
        {
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
        }else{
          console.error('No Employee Was Found');
        }
    }

    openDemandeConges() {
      this.dialog.open(DemandeCongesComponent,{width: '1000px'});
    }
}
