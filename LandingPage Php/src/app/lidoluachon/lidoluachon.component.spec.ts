import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LidoluachonComponent } from './lidoluachon.component';

describe('LidoluachonComponent', () => {
  let component: LidoluachonComponent;
  let fixture: ComponentFixture<LidoluachonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LidoluachonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LidoluachonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
