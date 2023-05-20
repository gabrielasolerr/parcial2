import { Equipo } from "./equipo";
export class Grupo {
  letter: string;
  teams: Equipo[];

  constructor(
    letter: string,
    teams: Equipo[]
  ) {
    this.letter = letter;
    this.teams = teams;
  }
}
