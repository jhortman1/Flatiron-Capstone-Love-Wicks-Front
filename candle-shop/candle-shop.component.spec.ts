import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandleShopComponent } from './candle-shop.component';

describe('CandleShopComponent', () => {
  let component: CandleShopComponent;
  let fixture: ComponentFixture<CandleShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandleShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandleShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
