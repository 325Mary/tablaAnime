import { TestBed } from '@angular/core/testing';

import { AnimeJsonService } from './anime-json.service';

describe('AnimeJsonService', () => {
  let service: AnimeJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
