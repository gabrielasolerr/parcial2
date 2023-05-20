import { Component, OnInit } from '@angular/core';
import { Partido } from '../partido';
import { PartidoService } from '../partido.service';

@Component({
  selector: 'app-partido-list',
  templateUrl: './partido-list.component.html',
  styleUrls: ['./partido-list.component.css']
})
export class PartidoListComponent implements OnInit {

  partidos: Array<Partido> = [];
  golesPais: Array<{pais: string, goles: number}> = [];

  constructor(private partidoService: PartidoService) { }

  getPartidos(): void {
    this.partidoService.getPartidos().subscribe((partidos) => {
      this.partidos = partidos;
      this.golesPorPais();
    })
  }

  golesPorPais(): void {
    const golesMap = new Map<string, number>();

    for(const partido of this.partidos) {
      const pais = partido.home_team.name;
      const goles = partido.home_team.goals;

      if (goles !== undefined && !isNaN(goles)) {
        if (golesMap.has(pais)) {
          golesMap.set(pais, golesMap.get(pais)! + goles);
        }
        else {
          golesMap.set(pais, goles);
        }
      }
    }

    this.golesPais = Array.from(golesMap.entries()).map(([pais, goles]) => ({pais, goles}));
    this.golesPais.sort((a, b) => b.goles - a.goles);
  }

  ngOnInit() {
    this.getPartidos();
  }

}


