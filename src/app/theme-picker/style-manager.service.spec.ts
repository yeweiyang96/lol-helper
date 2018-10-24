import { TestBed, inject } from '@angular/core/testing';

import {StyleManager} from './style-manager.service';

describe('StyleManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StyleManager]
    });
  });

  it('should be created', inject([StyleManager], (service: StyleManager) => {
    expect(service).toBeTruthy();
  }));
});
