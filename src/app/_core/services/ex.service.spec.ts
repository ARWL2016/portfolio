/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExService } from './ex.service';

describe('Service: Ex', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExService]
    });
  });

  it('should ...', inject([ExService], (service: ExService) => {
    expect(service).toBeTruthy();
  }));
});
