import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DataApiService } from 'src/app/service/data-api.service';
import { CurrencyService } from 'src/app/service/currency.service';


import { CoinListComponent } from './coin-list.component';
import { of } from 'rxjs';


describe('CoinListComponent', () => {
  let component: CoinListComponent;
  let fixture: ComponentFixture<CoinListComponent>;
  let dataApiService = jasmine.createSpyObj('dataApiService',
  ['getCurrency', 'getTrendingCurrency', 'getGrpahicalCurrencyData', 'getCurrencyById']);
  let currencyService = jasmine.createSpyObj('currencyService',
  ['getCurrency', 'setCurrency']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinListComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,  
      ],
      providers:[
        {
          provide: DataApiService, useValue: dataApiService
         },
         {
          provide: CurrencyService, useValue: currencyService
         }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinListComponent);
    dataApiService.getCurrency.and.returnValue(of([]));
    currencyService.getCurrency.and.returnValue(of([]));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('call function getBannerData', () => {
    dataApiService.getTrendingCurrency.returnValue(of(undefined));
    component.getBannerData();
    expect(dataApiService.getTrendingCurrency).toHaveBeenCalled();
  });
});
