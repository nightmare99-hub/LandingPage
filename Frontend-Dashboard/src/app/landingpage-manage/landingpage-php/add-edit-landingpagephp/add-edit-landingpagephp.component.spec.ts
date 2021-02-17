import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLandingpagephpComponent } from './add-edit-landingpagephp.component';

describe('AddEditLandingpagephpComponent', () => {
  let component: AddEditLandingpagephpComponent;
  let fixture: ComponentFixture<AddEditLandingpagephpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditLandingpagephpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLandingpagephpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
