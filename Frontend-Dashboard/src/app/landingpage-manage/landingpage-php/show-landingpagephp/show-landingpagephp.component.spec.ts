import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLandingpagephpComponent } from './show-landingpagephp.component';

describe('ShowLandingpagephpComponent', () => {
  let component: ShowLandingpagephpComponent;
  let fixture: ComponentFixture<ShowLandingpagephpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLandingpagephpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLandingpagephpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
