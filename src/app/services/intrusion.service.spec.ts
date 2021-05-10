import { TestBed } from '@angular/core/testing';

import { IntrusionService } from './intrusion.service';

describe('IntrusionService', () => {
  let service: IntrusionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntrusionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
