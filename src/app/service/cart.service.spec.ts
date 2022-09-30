import { TestBed } from '@angular/core/testing';
import { MessageService, ConfirmationService } from 'primeng/api';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;
  let messageService = jasmine.createSpyObj('messageService', ['add']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {
          provide: MessageService, useValue: messageService
         },

      ]
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
