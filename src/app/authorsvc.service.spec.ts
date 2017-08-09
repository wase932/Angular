import { TestBed, inject } from '@angular/core/testing';

import { AuthorsvcService } from './authorsvc.service';

describe('AuthorsvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorsvcService]
    });
  });

  it('should be created', inject([AuthorsvcService], (service: AuthorsvcService) => {
    expect(service).toBeTruthy();
  }));
});
