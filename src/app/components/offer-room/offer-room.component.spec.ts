import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferRoomComponent } from './offer-room.component';

describe('OfferRoomComponent', () => {
  let component: OfferRoomComponent;
  let fixture: ComponentFixture<OfferRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
