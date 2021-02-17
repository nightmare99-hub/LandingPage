import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpagePhpComponent } from './landingpage-php.component';

describe('LandingpagePhpComponent', () => {
  let component: LandingpagePhpComponent;
  let fixture: ComponentFixture<LandingpagePhpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingpagePhpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpagePhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
