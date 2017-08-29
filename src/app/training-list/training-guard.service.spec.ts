import { TestBed, inject } from '@angular/core/testing';

import { TrainingGuardService } from './training-guard.service';

describe('TrainingGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingGuardService]
    });
  });

  it('should be created', inject([TrainingGuardService], (service: TrainingGuardService) => {
    expect(service).toBeTruthy();
  }));
});
