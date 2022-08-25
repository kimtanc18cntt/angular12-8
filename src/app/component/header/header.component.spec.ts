import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { CurrencyService } from 'src/app/service/currency.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let cartService = jasmine.createSpyObj('cartService',
  ['getProducts', 'setProduct', 'addtoCart', 'getTotalPrice','removeCartItem','removeAllCart','displayMessage']);

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers:[
        {
          provide: CartService, useValue: cartService
         },
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    cartService.getProducts.and.returnValue(of([]));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should constructor', () => {
    expect(component).toBeTruthy();
  });

  it('call function sendCurrency', () => {
    cartService.addtoCart.and.returnValue(of(undefined));
    component.sendCurrency('');
    expect(cartService.getProducts).toHaveBeenCalled();
  });
});
