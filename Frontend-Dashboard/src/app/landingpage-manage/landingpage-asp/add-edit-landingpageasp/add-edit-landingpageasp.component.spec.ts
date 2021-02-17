import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLandingpageaspComponent } from './add-edit-landingpageasp.component';

describe('AddEditLandingpageaspComponent', () => {
  let component: AddEditLandingpageaspComponent;
  let fixture: ComponentFixture<AddEditLandingpageaspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditLandingpageaspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLandingpageaspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
