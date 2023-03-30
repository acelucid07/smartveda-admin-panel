import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRatingCriteriaComponent } from './add-edit-rating-criteria.component';

describe('AddEditRatingCriteriaComponent', () => {
  let component: AddEditRatingCriteriaComponent;
  let fixture: ComponentFixture<AddEditRatingCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRatingCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditRatingCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
