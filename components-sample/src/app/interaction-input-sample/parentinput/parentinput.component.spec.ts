import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentinputComponent } from './parentinput.component';

describe('ParentComponent', () => {
  let component: ParentinputComponent;
  let fixture: ComponentFixture<ParentinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
