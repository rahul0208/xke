import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingXKEsComponent } from './upcoming-xkes.component';

describe('UpcomingXKEsComponent', () => {
  let component: UpcomingXKEsComponent;
  let fixture: ComponentFixture<UpcomingXKEsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingXKEsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingXKEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
