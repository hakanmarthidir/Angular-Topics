import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentserviceComponent } from './parentservice.component';

describe('ParentserviceComponent', () => {
  let component: ParentserviceComponent;
  let fixture: ComponentFixture<ParentserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
