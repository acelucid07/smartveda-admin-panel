import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSpecialComponent } from './banner-special.component';

describe('BannerSpecialComponent', () => {
  let component: BannerSpecialComponent;
  let fixture: ComponentFixture<BannerSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerSpecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
