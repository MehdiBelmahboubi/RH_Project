import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Base64DecodeService } from '../../../service/base64-decode.service';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.css'
})
export class PdfViewerComponent implements OnInit{
  fileUrl!:SafeResourceUrl;
  decodedCV: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private sanitizer: DomSanitizer,private base64DecodeService: Base64DecodeService) { }

  afterLoadComplete(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
    const byteArray = new Uint8Array(atob(this.data).split('').map((char)=>char.charCodeAt(0)));
    const file = new Blob([byteArray],{type:'application/pdf'});
    this.fileUrl = window.URL.createObjectURL(file);
  }

}
