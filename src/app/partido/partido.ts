import { AwayTeam } from "../awayTeam/awayTeam";
import { HomeTeam } from "../homeTeam/homeTeam";

export class Partido {
  id: number;
  attendance: string;
  away_team: AwayTeam;
  away_team_country: string;
  datetime: string;
  home_team: HomeTeam;
  home_team_country: string;
  last_changed_at: string;
  last_checked_at: string;
  location: string;
  stage_name: string;
  status: string;
  venue: string;
  winner: string;
  winner_code: string;

  public constructor(
    id: number,
    attendance: string,
    away_team: AwayTeam,
    away_team_country: string,
    datetime: string,
    home_team: HomeTeam,
    home_team_country: string,
    last_changed_at: string,
    last_checked_at: string,
    location: string,
    stage_name: string,
    status: string,
    venue: string,
    winner: string,
    winner_code: string
    ) {
      this.id = id,
      this.attendance = attendance,
      this.away_team = away_team,
      this.away_team_country = away_team_country,
      this.datetime = datetime,
      this.home_team = home_team,
      this.home_team_country = home_team_country,
      this.last_changed_at = last_changed_at,
      this.last_checked_at = last_checked_at,
      this.location = location,
      this.stage_name = stage_name,
      this.status = status,
      this.venue = venue,
      this.winner = winner,
      this.winner_code = winner_code
    }
}
