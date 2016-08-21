/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { SubtasksService } from './subtasks.service';

describe('Service: Subtasks', () => {
  beforeEach(() => {
    addProviders([SubtasksService]);
  });

  it('should ...',
    inject([SubtasksService],
      (service: SubtasksService) => {
        expect(service).toBeTruthy();
      }));
});
