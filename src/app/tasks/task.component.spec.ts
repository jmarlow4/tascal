/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TaskComponent } from './task.component';

describe('Component: Task', () => {
  it('should create an instance', () => {
    let component = new TaskComponent();
    expect(component).toBeTruthy();
  });
});
