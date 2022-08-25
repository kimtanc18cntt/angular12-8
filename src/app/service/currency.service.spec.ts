import { TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';

import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      
      providers:[
        MessageService,
      ]
    });
    service = TestBed.inject(CurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 
});
