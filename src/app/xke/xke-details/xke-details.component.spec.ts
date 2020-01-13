import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XkeDetailsComponent } from './xke-details.component';

describe('XkeDetailsComponent', () => {
  let component: XkeDetailsComponent;
  let fixture: ComponentFixture<XkeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XkeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XkeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
