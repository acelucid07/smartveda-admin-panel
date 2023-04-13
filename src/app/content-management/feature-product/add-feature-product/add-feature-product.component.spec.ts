import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeatureProductComponent } from './add-feature-product.component';

describe('AddFeatureProductComponent', () => {
  let component: AddFeatureProductComponent;
  let fixture: ComponentFixture<AddFeatureProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFeatureProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeatureProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
