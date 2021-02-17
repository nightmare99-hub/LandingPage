import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLandingpagemobiComponent } from './add-edit-landingpagemobi.component';

describe('AddEditLandingpagemobiComponent', () => {
  let component: AddEditLandingpagemobiComponent;
  let fixture: ComponentFixture<AddEditLandingpagemobiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditLandingpagemobiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLandingpagemobiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
