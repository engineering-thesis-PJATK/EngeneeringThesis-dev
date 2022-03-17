import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAddressFormComponent } from './company-address-form.component';

describe('CompanyAddressFormComponent', () => {
  let component: CompanyAddressFormComponent;
  let fixture: ComponentFixture<CompanyAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAddressFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
