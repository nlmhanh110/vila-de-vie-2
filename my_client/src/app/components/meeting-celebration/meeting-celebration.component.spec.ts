import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingCelebrationComponent } from './meeting-celebration.component';

describe('MeetingCelebrationComponent', () => {
  let component: MeetingCelebrationComponent;
  let fixture: ComponentFixture<MeetingCelebrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingCelebrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingCelebrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
