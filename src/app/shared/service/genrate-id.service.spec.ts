import { TestBed } from '@angular/core/testing';

import { GenrateIdService } from './genrate-id.service';

describe('GenrateIdService', () => {
  let service: GenrateIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenrateIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
