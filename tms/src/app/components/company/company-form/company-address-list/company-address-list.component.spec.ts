import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAddressListComponent } from './company-address-list.component';

describe('CompanyAddressListComponent', () => {
  let component: CompanyAddressListComponent;
  let fixture: ComponentFixture<CompanyAddressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAddressListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
