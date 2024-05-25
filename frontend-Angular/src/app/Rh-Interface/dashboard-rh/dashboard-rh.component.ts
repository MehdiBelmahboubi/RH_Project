import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Taches } from '../../models/taches';
import { TachesService } from '../../service/taches.service';

@Component({
  selector: 'app-dashboard-rh',
  templateUrl: './dashboard-rh.component.html',
  styleUrls: ['./dashboard-rh.component.css']
})
export class DashboardRhComponent implements OnInit {
  @Input() cin: string | null = null; // Input property to receive cin from parent component
  taches: Taches[] = []; // Array to store Taches data
  tachesDataSource!: MatTableDataSource<Taches>; // MatTableDataSource to display Taches data
  @ViewChild(MatPaginator) paginator!: MatPaginator; // Reference to MatPaginator
  @ViewChild(MatSort) sort!: MatSort; // Reference to MatSort

  chartOptions: any = {
    title: {
      text: "Tasks Overview"
    },
    animationEnabled: true,
    axisY: {
      includeZero: true
    },
    data: [{
      type: "column",
      indexLabelFontColor: "#5A5757",
      color: "green", // Set the color to green
      dataPoints: []
    }]
  };

  constructor(private tachesService: TachesService) { }

  ngOnInit(): void {
    this.cin=localStorage.getItem('cin');
    if (this.cin) {
      this.tachesService.getTachesByEmployes(this.cin).subscribe({
        next: value => {
          this.taches = value; // Assign received Taches data to the taches property
          this.updateDataSource(); // Update MatTableDataSource
          this.updateChartData(); // Update chart data
        },
        error: (err) => {
          console.error('Error fetching Taches:', err);
        }
      });
    }
  }

  updateDataSource() {
    // Filter tasks based on their status (etat)
    const filteredTaches = this.taches.filter(tache => tache.etat === 'Encours' || tache.etat === 'Terminer' || tache.etat === 'EnRetard');
    this.tachesDataSource = new MatTableDataSource<Taches>(filteredTaches); // Create MatTableDataSource with filtered Taches data
    this.tachesDataSource.paginator = this.paginator; // Assign MatPaginator to MatTableDataSource
    this.tachesDataSource.sort = this.sort; // Assign MatSort to MatTableDataSource
  }

  updateChartData() {
    const counts: { [key: string]: number } = {};
    for (const tache of this.taches) {
      const date = tache.dateDebut || '';
      counts[date] = counts[date] ? counts[date] + 1 : 1;
    }
    const dataPoints = Object.keys(counts).map(date => ({ x: parseInt(date), y: counts[date], indexLabel: `{y}` }));
    this.chartOptions.data[0].dataPoints = dataPoints;
  }
}
