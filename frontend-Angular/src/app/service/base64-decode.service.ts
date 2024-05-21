import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Base64DecodeService {

  constructor() { }

  decodeBase64(encodedString: string): string {
    encodedString = encodedString.trim();
    return atob(encodedString);
  }
}
