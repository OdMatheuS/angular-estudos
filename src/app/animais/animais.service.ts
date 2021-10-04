import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../auth/token/token.service';
import { Animais, Animal } from './animais';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<Animais>(`${environment.apiUrl}/${nomeDoUsuario}/photos`, { headers });
  }

  buscaPorId(idAnimal: number): Observable<Animal> {
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<Animal>(`${environment.apiUrl}/photos/${idAnimal}`, { headers });
  }
}
