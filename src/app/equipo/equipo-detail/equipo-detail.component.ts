import { Component, Input, OnInit } from '@angular/core';
import { Equipo } from '../equipo';

@Component({
  selector: 'app-equipo-detail',
  templateUrl: './equipo-detail.component.html',
  styleUrls: ['./equipo-detail.component.css']
})
export class EquipoDetailComponent implements OnInit {

  @Input() equipoDetail!: Equipo;

  constructor() { }

  ngOnInit() {
  }

}
