import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';

import { ApiregisterService } from './apiregister.service';

describe('ApiregisterService', () => {
  let service: ApiregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers:[MessageService]
    });
    service = TestBed.inject(ApiregisterService);
    
  });
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
