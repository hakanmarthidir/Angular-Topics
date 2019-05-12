import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildchangeComponent } from './childchange.component';

describe('ChildchangeComponent', () => {
  let component: ChildchangeComponent;
  let fixture: ComponentFixture<ChildchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
