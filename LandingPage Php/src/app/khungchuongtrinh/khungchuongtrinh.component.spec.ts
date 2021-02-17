import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhungchuongtrinhComponent } from './khungchuongtrinh.component';

describe('KhungchuongtrinhComponent', () => {
  let component: KhungchuongtrinhComponent;
  let fixture: ComponentFixture<KhungchuongtrinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhungchuongtrinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhungchuongtrinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
