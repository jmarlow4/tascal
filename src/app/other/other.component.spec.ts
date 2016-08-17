/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { OtherComponent } from './other.component';

describe('Component: Other', () => {
  it('should create an instance', () => {
    let component = new OtherComponent();
    expect(component).toBeTruthy();
  });
});
