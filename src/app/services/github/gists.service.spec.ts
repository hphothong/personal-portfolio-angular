import { TestBed } from '@angular/core/testing';

import { GistsService } from './gists.service';
import { HttpClientModule } from '@angular/common/http';

describe('GistsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: GistsService = TestBed.get(GistsService);
    expect(service).toBeTruthy();
  });
});
