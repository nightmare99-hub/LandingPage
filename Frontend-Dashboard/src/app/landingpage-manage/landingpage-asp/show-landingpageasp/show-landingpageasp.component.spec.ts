import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLandingpageaspComponent } from './show-landingpageasp.component';

describe('ShowLandingpageaspComponent', () => {
  let component: ShowLandingpageaspComponent;
  let fixture: ComponentFixture<ShowLandingpageaspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLandingpageaspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLandingpageaspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
