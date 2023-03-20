import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditReviewerComponent } from './add-edit-reviewer.component';

describe('AddEditReviewerComponent', () => {
  let component: AddEditReviewerComponent;
  let fixture: ComponentFixture<AddEditReviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditReviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
