import { TestBed } from '@angular/core/testing';

import { ApiRenderService } from './api-render.service';

describe('ApiRenderService', () => {
  let service: ApiRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
