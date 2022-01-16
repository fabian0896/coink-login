import { TestBed } from '@angular/core/testing';

import { AccountFormGuard } from './account-form.guard';

describe('AccountFormGuard', () => {
  let guard: AccountFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccountFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
