import { TestBed } from '@angular/core/testing';

import { ProductCartService } from './product-cart.service';

describe('CartServiceService', () => {
  let service: ProductCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});