import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageMobiComponent } from './landingpage-mobi.component';

describe('LandingpageMobiComponent', () => {
  let component: LandingpageMobiComponent;
  let fixture: ComponentFixture<LandingpageMobiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingpageMobiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpageMobiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
