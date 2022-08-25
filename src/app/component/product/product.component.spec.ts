import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import {ApiService} from '../../service/api.service';
import {CartService} from '../../service/cart.service';
import { BehaviorSubject } from 'rxjs';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';


import { ProductComponent } from './product.component';

import { count, of } from 'rxjs';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let cartService = jasmine.createSpyObj('cartService',
  ['getProducts', 'setProduct', 'addtoCart', 'getTotalPrice','removeCartItem','removeAllCart','displayMessage']);
  let messageService = jasmine.createSpyObj('messageService', ['add']);
  let apiservice = jasmine.createSpyObj('apiservice', ['getProduct'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports: [
        HttpClientModule,
      ],
      providers:[
        {
          provide: MessageService, useValue: messageService
         },
        {
          provide: CartService, useValue: cartService
        },
        {
          provide: ApiService, useValue: apiservice
        }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    apiservice.getProduct.and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('call function addtocart', () => {
    cartService.addtoCart.and.returnValue(of(undefined));
    component.addtocart('1');
    expect(cartService.displayMessage).toHaveBeenCalled();
  });

  it('call function ngOnInit', () => {
    apiservice.getProduct.and.returnValue(of([]));
    component.ngOnInit();
    expect(apiservice.getProduct).toHaveBeenCalled();
  });
});
