import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }

}
