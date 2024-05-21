import { TestBed } from '@angular/core/testing';

import { Base64DecodeServiceService } from './base64-decode.service';

describe('Base64DecodeServiceService', () => {
  let service: Base64DecodeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Base64DecodeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
