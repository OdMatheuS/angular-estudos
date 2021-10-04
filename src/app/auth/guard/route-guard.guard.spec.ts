import { TestBed } from '@angular/core/testing';

import { RouteGuardAnimais } from './route-guard.guard';

describe('RouteGuardAnimais', () => {
  let guard: RouteGuardAnimais;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouteGuardAnimais);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
