import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotcomponentComponent } from './pagenotcomponent.component';

describe('PagenotcomponentComponent', () => {
  let component: PagenotcomponentComponent;
  let fixture: ComponentFixture<PagenotcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenotcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagenotcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
