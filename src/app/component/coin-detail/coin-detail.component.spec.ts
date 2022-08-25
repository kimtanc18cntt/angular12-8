import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CurrencyService } from 'src/app/service/currency.service';
import { DataApiService } from 'src/app/service/data-api.service';

import { CoinDetailComponent } from './coin-detail.component';
import { of } from 'rxjs';

fdescribe('CoinDetailComponent', () => {
  let component: CoinDetailComponent;
  let fixture: ComponentFixture<CoinDetailComponent>;
    let dataApiService = jasmine.createSpyObj('dataApiService',
    ['getCurrency', 'getTrendingCurrency', 'getGrpahicalCurrencyData', 'getCurrencyById']);
    let currencyService = jasmine.createSpyObj('currencyService',
    ['getCurrency', 'setCurrency']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinDetailComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        { provide: DataApiService, useValue: dataApiService },
        { provide: CurrencyService, useValue: currencyService }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinDetailComponent);
    currencyService.getCurrency.and.returnValue(of([]));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('call function getCoinData', () => {
  dataApiService.getCurrencyById.and.returnValue(of(undefined));
    component.getCoinData();
    expect(dataApiService.getCurrencyById).toHaveBeenCalled();
  });
});
