import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongcaocapComponent } from './phongcaocap.component';

describe('PhongcaocapComponent', () => {
  let component: PhongcaocapComponent;
  let fixture: ComponentFixture<PhongcaocapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhongcaocapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhongcaocapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
