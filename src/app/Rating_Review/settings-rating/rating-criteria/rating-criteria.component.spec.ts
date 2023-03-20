import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingCriteriaComponent } from './rating-criteria.component';

describe('RatingCriteriaComponent', () => {
  let component: RatingCriteriaComponent;
  let fixture: ComponentFixture<RatingCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
