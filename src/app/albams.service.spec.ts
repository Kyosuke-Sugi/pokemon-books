import { TestBed } from '@angular/core/testing';

import { AlbamsService } from './albams.service';

describe('AlbamsService', () => {
  let service: AlbamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
