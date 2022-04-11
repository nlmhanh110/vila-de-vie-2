import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindBookingInfoComponent } from './find-booking-info.component';


describe('FindBooingInfoComponent', () => {
  let component: FindBookingInfoComponent;
  let fixture: ComponentFixture<FindBookingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindBookingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBookingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
