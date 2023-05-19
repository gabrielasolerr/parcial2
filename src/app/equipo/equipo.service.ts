import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Equipo } from './equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private apiUrl: string = environment.baseUrl2;


  constructor(private http: HttpClient) { }
    getEquipos(): Observable<Equipo[]> {
      return this.http.get<Equipo[]>(this.apiUrl);
  }

}
