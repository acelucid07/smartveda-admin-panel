import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecentQuibComponent } from './recent-quib.component';

describe('OrderTransactionComponent', () => {
  let component: RecentQuibComponent;
  let fixture: ComponentFixture<RecentQuibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentQuibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentQuibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
