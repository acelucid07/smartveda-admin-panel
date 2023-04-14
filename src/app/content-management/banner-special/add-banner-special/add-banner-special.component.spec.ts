import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBannerSpecialComponent } from './add-banner-special.component';

describe('AddBannerSpecialComponent', () => {
  let component: AddBannerSpecialComponent;
  let fixture: ComponentFixture<AddBannerSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBannerSpecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBannerSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
