/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ListsService } from './lists.service';

describe('Service: Lists', () => {
  beforeEach(() => {
    addProviders([ListsService]);
  });

  it('should ...',
    inject([ListsService],
      (service: ListsService) => {
        expect(service).toBeTruthy();
      }));
});
