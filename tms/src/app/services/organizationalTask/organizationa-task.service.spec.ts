import { TestBed } from '@angular/core/testing';

import { OrganizationaTaskService } from './organizationa-task.service';

describe('OrganizationaTaskService', () => {
  let service: OrganizationaTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationaTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
