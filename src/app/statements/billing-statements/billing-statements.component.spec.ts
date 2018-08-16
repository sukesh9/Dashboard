import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingStatementsComponent } from './billing-statements.component';

describe('BillingStatementsComponent', () => {
  let component: BillingStatementsComponent;
  let fixture: ComponentFixture<BillingStatementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingStatementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
