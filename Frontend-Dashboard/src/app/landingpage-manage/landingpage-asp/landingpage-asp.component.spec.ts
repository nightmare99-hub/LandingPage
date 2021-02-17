import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageASPComponent } from './landingpage-asp.component';

describe('LandingpageASPComponent', () => {
  let component: LandingpageASPComponent;
  let fixture: ComponentFixture<LandingpageASPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingpageASPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpageASPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
