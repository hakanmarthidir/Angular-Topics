import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildserviceComponent } from './childservice.component';

describe('ChildserviceComponent', () => {
  let component: ChildserviceComponent;
  let fixture: ComponentFixture<ChildserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
