import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { DataApiService } from './data-api.service';

describe('DataApiService', () => {
  let service: DataApiService;

  beforeEach(async () => {
   TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    });
    service = TestBed.inject(DataApiService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
