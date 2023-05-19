/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EquipoService } from './equipo.service';

describe('Service: Equipo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquipoService]
    });
  });

  it('should ...', inject([EquipoService], (service: EquipoService) => {
    expect(service).toBeTruthy();
  }));
});
