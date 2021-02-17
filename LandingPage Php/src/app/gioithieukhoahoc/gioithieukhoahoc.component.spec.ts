import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GioithieukhoahocComponent } from './gioithieukhoahoc.component';

describe('GioithieukhoahocComponent', () => {
  let component: GioithieukhoahocComponent;
  let fixture: ComponentFixture<GioithieukhoahocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GioithieukhoahocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GioithieukhoahocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
