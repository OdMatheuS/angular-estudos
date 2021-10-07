import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private http: HttpClient) {}

  cadastrarNovoUsuario(params: NovoUsuario): Observable<NovoUsuario> {
    return this.http.post<NovoUsuario>(`${environment.apiUrl}/user/signup`, params);
  }

  getVerificaUsuarioExistente(nomeUsuario: string) {
    return this.http.get(`${environment.apiUrl}/user/exists/${nomeUsuario}`);
  }
}
