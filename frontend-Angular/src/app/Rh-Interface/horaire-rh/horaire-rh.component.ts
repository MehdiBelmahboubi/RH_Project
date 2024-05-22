import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { HoraireService } from '../../service/horaire.service';
import { MatDialog } from '@angular/material/dialog';
import { AddHoraireDialogComponentComponent } from './add-horaire-dialog-component/add-horaire-dialog-component.component';
import { Horaire } from '../../models/horaire';


interface CalendarEvent {
  title: string;
  date: string;
}

@Component({
  selector: 'app-horaire-rh',
  templateUrl: './horaire-rh.component.html',
  styleUrl: './horaire-rh.component.css'
})
export class HoraireRhComponent {
  cin: string | null = null;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [] 
  };

  constructor(private horaireService: HoraireService, private dialog: MatDialog) {}

  ngOnInit() {
    this.cin=localStorage.getItem('cin');
    if(this.cin)
      {
        this.horaireService.getHoraireByEmployes(this.cin).subscribe(horaires => {
          const events: CalendarEvent[] = horaires.map(horaire => ({
            title: `Worked: ${horaire.heureTravaille}`,
            date: this.formatDate(horaire.jour)
          }));
          this.calendarOptions.events = events;
        });
      }
  }

  handleDateClick(data: any) {
    this.dialog.open(AddHoraireDialogComponentComponent,{
      data,
      width: '1000px'});
  }

  private formatDate(dateStr: string): string {
    const [day, month, year] = dateStr.split('/');
    return `${year}-${month}-${day}`; // Convert to 'yyyy-MM-dd' format
  }
}
