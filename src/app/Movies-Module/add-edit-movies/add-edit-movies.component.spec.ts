import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMoviesComponent } from './add-edit-movies.component';

describe('AddEditCategoryComponent', () => {
  let component: AddEditMoviesComponent;
  let fixture: ComponentFixture<AddEditMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
