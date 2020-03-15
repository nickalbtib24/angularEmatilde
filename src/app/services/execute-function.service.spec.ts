import { TestBed } from '@angular/core/testing';

import { ExecuteFunctionService } from './execute-function.service';

describe('ExecuteFunctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExecuteFunctionService = TestBed.get(ExecuteFunctionService);
    expect(service).toBeTruthy();
  });
});
