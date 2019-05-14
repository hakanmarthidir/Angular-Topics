import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildinputComponent } from './childinput.component';

describe('ChildComponent', () => {
  let component: ChildinputComponent;
  let fixture: ComponentFixture<ChildinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
