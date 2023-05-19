export class HomeTeam {
  country: string;
  goals: number;
  name: string;
  penalties: number

  constructor(
    country: string,
    goals: number,
    name: string,
    penalties: number
  ) {
    this.country = country;
    this.goals = goals;
    this.name = name;
    this.penalties = penalties
  }
}
