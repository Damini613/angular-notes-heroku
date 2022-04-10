import { TestBed } from '@angular/core/testing';

import { EntryToDashbaordGuard } from './entry-to-dashbaord.guard';

describe('EntryToDashbaordGuard', () => {
  let guard: EntryToDashbaordGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EntryToDashbaordGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
