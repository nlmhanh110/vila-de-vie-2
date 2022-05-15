import { TestBed } from '@angular/core/testing';

import { FindBookingInfoService } from './find-booking-info.service';

describe('FindBookingInfoService', () => {
  let service: FindBookingInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindBookingInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
