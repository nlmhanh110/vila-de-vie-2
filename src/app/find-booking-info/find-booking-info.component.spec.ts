import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBooingInfoComponent } from './find-booing-info.component';

describe('FindBooingInfoComponent', () => {
  let component: FindBooingInfoComponent;
  let fixture: ComponentFixture<FindBooingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindBooingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBooingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
