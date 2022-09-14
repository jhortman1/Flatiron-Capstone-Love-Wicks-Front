import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCandleComponent } from './view-candle.component';

describe('ViewCandleComponent', () => {
  let component: ViewCandleComponent;
  let fixture: ComponentFixture<ViewCandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCandleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
