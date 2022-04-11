import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetnceleRequestComponent } from './meetncele-request.component';

describe('MeetnceleRequestComponent', () => {
  let component: MeetnceleRequestComponent;
  let fixture: ComponentFixture<MeetnceleRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetnceleRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetnceleRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
