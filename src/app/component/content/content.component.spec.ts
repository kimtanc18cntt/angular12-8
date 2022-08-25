import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from 'src/app/service/cart.service';

import { ContentComponent } from './content.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;
  let cartService : jasmine.SpyObj<CartService>;
  beforeEach(async () => {
  
    await TestBed.configureTestingModule({
      declarations: [ ContentComponent ],
      
    })
    .compileComponents().then(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('call function  emptycart', () => {
    
  //   component. emptycart();
  //   expect(component).toBeTruthy();
  // });

});
