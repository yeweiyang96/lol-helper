import {TestBed, inject} from '@angular/core/testing';

import {ThemeStorage} from './theme-storage.service';

describe('ThemeStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeStorage]
    });
  });

  it('should be created', inject([ThemeStorage], (service: ThemeStorage) => {
    expect(service).toBeTruthy();
  }));
});
