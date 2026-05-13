import { TestBed } from '@angular/core/testing';

import { ProductRemoteService } from './product-remote.service';

describe('ProductRemote', () => {
  let service: ProductRemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductRemoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
