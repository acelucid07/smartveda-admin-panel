import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUserTypeComponent } from './add-edit-usertype.component';

describe('AddEditUserTypeComponent', () => {
  let component: AddEditUserTypeComponent;
  let fixture: ComponentFixture<AddEditUserTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditUserTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditUserTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
