import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFeatureComponent } from './dialog-feature.component';

describe('DialogFeatureComponent', () => {
  let component: DialogFeatureComponent;
  let fixture: ComponentFixture<DialogFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
