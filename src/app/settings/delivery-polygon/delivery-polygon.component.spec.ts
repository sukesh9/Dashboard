import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPolygonComponent } from './delivery-polygon.component';

describe('DeliveryPolygonComponent', () => {
  let component: DeliveryPolygonComponent;
  let fixture: ComponentFixture<DeliveryPolygonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryPolygonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPolygonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
