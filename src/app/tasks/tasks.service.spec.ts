/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { TasksService } from './tasks.service';

describe('Service: Tasks', () => {
  beforeEach(() => {
    addProviders([TasksService]);
  });

  it('should ...',
    inject([TasksService],
      (service: TasksService) => {
        expect(service).toBeTruthy();
      }));
});
