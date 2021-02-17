import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageJavaComponent } from './landingpage-java.component';

describe('LandingpageJavaComponent', () => {
  let component: LandingpageJavaComponent;
  let fixture: ComponentFixture<LandingpageJavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingpageJavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpageJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
