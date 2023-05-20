import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';
import { Grupo } from '../grupo';

@Component({
  selector: 'app-equipo-list',
  templateUrl: './equipo-list.component.html',
  styleUrls: ['./equipo-list.component.css']
})
export class EquipoListComponent implements OnInit {

  grupos: Array<Grupo> = [];
  equipos: Array<Equipo> = [];

  constructor(private equipoService: EquipoService) { }

  getEquipos(): void {
    this.equipoService.getGrupos().subscribe((grupos: { gruposs: any;}) => {
      let tempGrupo: Grupo[] = [];
      console.log(grupos.gruposs);
      grupos.gruposs.forEach((grupo: Grupo) => {
        grupo.teams.forEach((equipo) => {
          this.equipos.push(equipo);
        });
        tempGrupo.push(grupo);
      });
      this.grupos = tempGrupo;
    });
  }

  // onSelected(equipo: Equipo): void {
  //   this.selected = true;
  //   this.selectedEquipo = equipo;
  // }

  ngOnInit() {
    this.getEquipos();
  }

}
