import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoingumentorComponent } from './doingumentor.component';

describe('DoingumentorComponent', () => {
  let component: DoingumentorComponent;
  let fixture: ComponentFixture<DoingumentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoingumentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoingumentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
