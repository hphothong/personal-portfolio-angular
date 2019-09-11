import { TestBed } from '@angular/core/testing';

import { GenericChallengesService } from './generic-challenges.service';

describe('GenericChallengesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericChallengesService = TestBed.get(GenericChallengesService);
    expect(service).toBeTruthy();
  });
});
