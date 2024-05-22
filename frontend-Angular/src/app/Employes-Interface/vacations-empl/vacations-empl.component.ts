import {Component, OnInit, ViewChild} from '@angular/core';
import {Conges} from "../../models/conges";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {CongesService} from "../../service/conges.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-vacations-empl',
  templateUrl: './vacations-empl.component.html',
  styleUrl: './vacations-empl.component.css'
})
export class VacationsEmplComponent implements OnInit{

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

  openDemandeConges() {

  }

  ngOnInit(): void {
    this.cin = localStorage.getItem('cin');
    if(this.cin){
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
    }
  }
}
