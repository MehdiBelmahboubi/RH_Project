import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  constructor(public dialogRef: MatDialogRef<PopupComponent>,@Inject(MAT_DIALOG_DATA) public data: string) {}

  close(): void {
    window.location.reload();
    this.dialogRef.close();
  }

}
