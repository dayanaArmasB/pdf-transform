import { TestBed } from '@angular/core/testing';

import { DocumentoStateService } from './documento-state.service';

describe('DocumentoStateService', () => {
  let service: DocumentoStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentoStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
