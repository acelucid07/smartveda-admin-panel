import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveCouponComponent } from './inactive-coupon.component';

describe('InactiveCouponComponent', () => {
  let component: InactiveCouponComponent;
  let fixture: ComponentFixture<InactiveCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveCouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
