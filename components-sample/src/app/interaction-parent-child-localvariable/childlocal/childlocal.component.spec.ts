import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildlocalComponent } from './childlocal.component';

describe('ChildlocalComponent', () => {
  let component: ChildlocalComponent;
  let fixture: ComponentFixture<ChildlocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildlocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildlocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
