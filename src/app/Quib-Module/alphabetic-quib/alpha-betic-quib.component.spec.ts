import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaBeticQuibComponent } from './alpha-betic-quib.component';

describe('DeliveredOrderComponent', () => {
  let component: AlphaBeticQuibComponent;
  let fixture: ComponentFixture<AlphaBeticQuibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphaBeticQuibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaBeticQuibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
