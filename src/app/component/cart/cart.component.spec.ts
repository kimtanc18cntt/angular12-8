import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import {CartService} from '../../service/cart.service';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService = jasmine.createSpyObj('cartService',
  ['getProducts', 'setProduct', 'addtoCart', 'getTotalPrice','removeCartItem','removeAllCart','displayMessage']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers:[
        {
          provide: CartService, useValue: cartService
         },
       
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    cartService.getProducts.and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call function getdata', () => {
    cartService.addtoCart.and.returnValue(of(undefined));
    component.getdata();
    expect(cartService.getProducts).toHaveBeenCalled();
  });
});
