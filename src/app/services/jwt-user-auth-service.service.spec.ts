import { TestBed } from '@angular/core/testing';

import { JwtUserAuthService } from './jwt-user-auth-service.service';

describe('JwtUserAuthServiceService', () => {
  let service: JwtUserAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtUserAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
