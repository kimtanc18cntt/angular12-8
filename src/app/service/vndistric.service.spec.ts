import { TestBed } from '@angular/core/testing';

import { VndistricService } from './vndistric.service';

describe('VndistricService', () => {
  let service: VndistricService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VndistricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
