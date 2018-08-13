import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularHoursComponent } from './regular-hours.component';

describe('RegularHoursComponent', () => {
  let component: RegularHoursComponent;
  let fixture: ComponentFixture<RegularHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
