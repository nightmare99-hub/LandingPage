import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamnhanhocvienComponent } from './camnhanhocvien.component';

describe('CamnhanhocvienComponent', () => {
  let component: CamnhanhocvienComponent;
  let fixture: ComponentFixture<CamnhanhocvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamnhanhocvienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamnhanhocvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
