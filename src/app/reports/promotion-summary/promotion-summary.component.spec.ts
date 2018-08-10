import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionSummaryComponent } from './promotion-summary.component';

describe('PromotionSummaryComponent', () => {
  let component: PromotionSummaryComponent;
  let fixture: ComponentFixture<PromotionSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
