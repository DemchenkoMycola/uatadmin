import { TestBed } from '@angular/core/testing';

import { ChanalsService } from './chanals.service';

describe('ChanalsService', () => {
  let service: ChanalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChanalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
