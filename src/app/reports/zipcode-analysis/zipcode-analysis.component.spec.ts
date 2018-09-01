import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipcodeAnalysisComponent } from './zipcode-analysis.component';

describe('ZipcodeAnalysisComponent', () => {
  let component: ZipcodeAnalysisComponent;
  let fixture: ComponentFixture<ZipcodeAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipcodeAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipcodeAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
