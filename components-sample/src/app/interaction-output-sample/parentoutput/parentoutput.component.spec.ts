import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentoutputComponent } from './parentoutput.component';

describe('ParentoutputComponent', () => {
  let component: ParentoutputComponent;
  let fixture: ComponentFixture<ParentoutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentoutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
