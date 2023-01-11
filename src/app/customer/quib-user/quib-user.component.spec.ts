import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuibUserComponent } from './quib-user.component';

describe('QuibUserComponent', () => {
  let component: QuibUserComponent;
  let fixture: ComponentFixture<QuibUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuibUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuibUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
