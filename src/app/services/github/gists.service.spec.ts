import { TestBed } from '@angular/core/testing';

import { GistsService } from './gists.service';

describe('GistsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GistsService = TestBed.get(GistsService);
    expect(service).toBeTruthy();
  });
});
