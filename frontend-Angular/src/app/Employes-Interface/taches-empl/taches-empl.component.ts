import {Component, OnInit, ViewChild} from '@angular/core';
import {Taches} from "../../models/taches";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {TachesService} from "../../service/taches.service";

@Component({
  selector: 'app-taches-empl',
  templateUrl: './taches-empl.component.html',
  styleUrl: './taches-empl.component.css'
})
export class TachesEmplComponent implements OnInit{

  errorMessage: string | null = null;
  validation: string | null = null;
  cin: string | null = null;
  taches!: Array<Taches>;
  tachesDataSource!: MatTableDataSource<Taches>;
  displayedtachesColumns: string[] = ['dateDebut', 'dateFin', 'description', 'etat'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private tachesService: TachesService) { }

  ngOnInit(): void {
    this.cin = localStorage.getItem('cin');
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
    }
  }
}
