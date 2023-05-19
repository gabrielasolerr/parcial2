import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Partido } from './partido';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  private apiUrl: string = environment.baseUrl + 'partidos';

  constructor(private http: HttpClient) { }

  getPartidos(): Observable<Partido[]> {
    return this.http.get<Partido[]>(this.apiUrl);
  }

}
