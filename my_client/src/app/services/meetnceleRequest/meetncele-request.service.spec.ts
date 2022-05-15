import { TestBed } from '@angular/core/testing';

import { MeetnceleRequestService } from './meetncele-request.service';

describe('MeetnceleRequestService', () => {
  let service: MeetnceleRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetnceleRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
