import { TestBed } from '@angular/core/testing';

import { LoaderControllerService } from './loader-controller.service';

describe('LoaderControllerService', () => {
  let service: LoaderControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
