import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialHoursComponent } from './special-hours.component';

describe('SpecialHoursComponent', () => {
  let component: SpecialHoursComponent;
  let fixture: ComponentFixture<SpecialHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
