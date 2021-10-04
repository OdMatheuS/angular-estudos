import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animais, Animal } from './animais';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(private http: HttpClient) {}

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    return this.http.get<Animais>(`${environment.apiUrl}/${nomeDoUsuario}/photos`);
  }

  buscaPorId(idAnimal: number): Observable<Animal> {
    return this.http.get<Animal>(`${environment.apiUrl}/photos/${idAnimal}`);
  }
}
