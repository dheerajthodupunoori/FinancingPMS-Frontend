import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDashboardCustomerAdditionalDetailsComponent } from './owner-dashboard-customer-additional-details.component';

describe('OwnerDashboardCustomerAdditionalDetailsComponent', () => {
  let component: OwnerDashboardCustomerAdditionalDetailsComponent;
  let fixture: ComponentFixture<OwnerDashboardCustomerAdditionalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerDashboardCustomerAdditionalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerDashboardCustomerAdditionalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
