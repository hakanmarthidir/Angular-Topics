import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentchangeComponent } from './parentchange.component';

describe('ParentchangeComponent', () => {
  let component: ParentchangeComponent;
  let fixture: ComponentFixture<ParentchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
