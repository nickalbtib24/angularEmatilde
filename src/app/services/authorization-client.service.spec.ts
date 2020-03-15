import { TestBed } from '@angular/core/testing';

import { AuthorizationClientService } from './authorization-client.service';

describe('AuthorizationClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorizationClientService = TestBed.get(AuthorizationClientService);
    expect(service).toBeTruthy();
  });
});
