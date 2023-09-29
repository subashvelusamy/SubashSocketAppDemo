import { TestBed } from '@angular/core/testing';

import { SubashTestSocketService } from './subashsocket.service';

describe('SubashTestSocketService', () => {
  let service: SubashTestSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubashTestSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
