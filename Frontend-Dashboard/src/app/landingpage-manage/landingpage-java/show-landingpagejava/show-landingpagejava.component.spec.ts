import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLandingpagejavaComponent } from './show-landingpagejava.component';

describe('ShowLandingpagejavaComponent', () => {
  let component: ShowLandingpagejavaComponent;
  let fixture: ComponentFixture<ShowLandingpagejavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLandingpagejavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLandingpagejavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
