import { TestBed } from '@angular/core/testing';

import { ServiceMovilService } from './service-movil.service';

describe('ServiceMovilService', () => {
  let service: ServiceMovilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMovilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
