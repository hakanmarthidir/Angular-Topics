import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentlocalComponent } from './parentlocal.component';

describe('ParentlocalComponent', () => {
  let component: ParentlocalComponent;
  let fixture: ComponentFixture<ParentlocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentlocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentlocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
