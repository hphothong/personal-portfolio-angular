import { TestBed } from '@angular/core/testing';

import { DailyCodingProblemService } from './daily-coding-problem.service';

describe('DailyCodingProblemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailyCodingProblemService = TestBed.get(DailyCodingProblemService);
    expect(service).toBeTruthy();
  });
});
