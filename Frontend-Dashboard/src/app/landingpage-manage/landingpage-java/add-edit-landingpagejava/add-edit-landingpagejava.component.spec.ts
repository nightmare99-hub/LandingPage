import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLandingpagejavaComponent } from './add-edit-landingpagejava.component';

describe('AddEditLandingpagejavaComponent', () => {
  let component: AddEditLandingpagejavaComponent;
  let fixture: ComponentFixture<AddEditLandingpagejavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditLandingpagejavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLandingpagejavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
