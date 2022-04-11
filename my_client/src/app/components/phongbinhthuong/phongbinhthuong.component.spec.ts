import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongbinhthuongComponent } from './phongbinhthuong.component';

describe('PhongbinhthuongComponent', () => {
  let component: PhongbinhthuongComponent;
  let fixture: ComponentFixture<PhongbinhthuongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhongbinhthuongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhongbinhthuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
