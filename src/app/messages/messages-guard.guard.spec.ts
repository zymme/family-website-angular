import { TestBed, async, inject } from '@angular/core/testing';

import { MessagesGuardGuard } from './messages-guard.guard';

describe('MessagesGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesGuardGuard]
    });
  });

  it('should ...', inject([MessagesGuardGuard], (guard: MessagesGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
