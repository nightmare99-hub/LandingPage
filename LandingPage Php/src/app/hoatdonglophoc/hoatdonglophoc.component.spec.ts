import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoatdonglophocComponent } from './hoatdonglophoc.component';

describe('HoatdonglophocComponent', () => {
  let component: HoatdonglophocComponent;
  let fixture: ComponentFixture<HoatdonglophocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoatdonglophocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoatdonglophocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
