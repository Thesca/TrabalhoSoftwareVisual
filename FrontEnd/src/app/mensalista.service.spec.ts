import { TestBed } from '@angular/core/testing';

import { MensalistaService } from './mensalista.service';

describe('MensalistaService', () => {
  let service: MensalistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensalistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
