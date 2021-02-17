import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoanhnghiepComponent } from './doanhnghiep.component';

describe('DoanhnghiepComponent', () => {
  let component: DoanhnghiepComponent;
  let fixture: ComponentFixture<DoanhnghiepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoanhnghiepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoanhnghiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
