import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MostActiveComponent } from './most-active.component';

describe('OrdersComponent', () => {
  let component: MostActiveComponent;
  let fixture: ComponentFixture<MostActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
