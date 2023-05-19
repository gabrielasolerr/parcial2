import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoListComponent } from './equipo-list/equipo-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [EquipoListComponent],
  declarations: [EquipoListComponent]
})
export class EquipoModule { }
