import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLandingpagemobiComponent } from './show-landingpagemobi.component';

describe('ShowLandingpagemobiComponent', () => {
  let component: ShowLandingpagemobiComponent;
  let fixture: ComponentFixture<ShowLandingpagemobiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLandingpagemobiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLandingpagemobiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
