import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModifiersComponent } from './add-modifiers.component';

describe('AddModifiersComponent', () => {
  let component: AddModifiersComponent;
  let fixture: ComponentFixture<AddModifiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddModifiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
