import { Component, Inject, ViewChild } from '@angular/core';
import { Taches } from '../../models/taches';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TachesService } from '../../service/taches.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-taches-rh',
  templateUrl: './taches-rh.component.html',
  styleUrl: './taches-rh.component.css'
})
export class TachesRhComponent {
  errorMessage: string | null = null;
  validation: string | null = null;
  cin: string | null = null;
  taches!: Array<Taches>;
  tachesDataSource!: MatTableDataSource<Taches>;
  displayedtachesColumns: string[] = ['dateDebut', 'dateFin', 'description', 'etat'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private tachesService: TachesService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    
}
