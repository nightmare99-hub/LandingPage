import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageManageComponent } from './landingpage-manage.component';

describe('LandingpageManageComponent', () => {
  let component: LandingpageManageComponent;
  let fixture: ComponentFixture<LandingpageManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingpageManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpageManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
