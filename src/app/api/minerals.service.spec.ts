import { TestBed } from '@angular/core/testing';

import { MineralsService } from './minerals.service';

describe('MineralsService', () => {
  let service: MineralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MineralsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
