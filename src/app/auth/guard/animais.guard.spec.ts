import { TestBed } from '@angular/core/testing';

import { AnimaisGuard } from './animais.guard';

describe('AnimaisGuard', () => {
  let guard: AnimaisGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AnimaisGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
