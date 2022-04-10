import { TestBed } from '@angular/core/testing';

import { CalAgeService } from './cal-age.service';

describe('CalAgeService', () => {
  let service: CalAgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalAgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
