import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildoutputComponent } from './childoutput.component';

describe('ChildoutputComponent', () => {
  let component: ChildoutputComponent;
  let fixture: ComponentFixture<ChildoutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildoutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
