import { TestBed } from '@angular/core/testing';

import { ProjectEulerService } from './project-euler.service';

describe('ProjectEulerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectEulerService = TestBed.get(ProjectEulerService);
    expect(service).toBeTruthy();
  });
});
