import { TestBed } from '@angular/core/testing';

import { HumanaserviceService } from './humanaservice.service';

describe('HumanaserviceService', () => {
  let service: HumanaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HumanaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
