import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCouponComponent } from './active-coupon.component';

describe('ActiveCouponComponent', () => {
  let component: ActiveCouponComponent;
  let fixture: ComponentFixture<ActiveCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveCouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
