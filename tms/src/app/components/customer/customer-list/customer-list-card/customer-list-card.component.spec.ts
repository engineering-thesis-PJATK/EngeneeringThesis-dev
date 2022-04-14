import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListCardComponent } from './customer-list-card.component';

describe('CustomerListCardComponent', () => {
  let component: CustomerListCardComponent;
  let fixture: ComponentFixture<CustomerListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
