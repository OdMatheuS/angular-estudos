import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, pipe, throwError } from 'rxjs';
import { Animais, Animal } from './animais';
import { environment } from 'src/environments/environment';
import { catchError, mapTo } from 'rxjs/operators';

const NOT_MODIFIED = '304';

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

  excluiAnimal(id: number): Observable<Animal> {
    return this.http.delete<Animal>(`${environment.apiUrl}/photos/${id}`);
  }

  curtir(id: number): Observable<boolean> {
    return this.http
      .post<Animal>(`${environment.apiUrl}/photos/${id}/like`, {}, { observe: 'response' })
      .pipe(
        mapTo(true),
        catchError((error) => {
          return error.status === NOT_MODIFIED ? of(false) : throwError(error);
        })
      );
  }

  uploadFotoAnimal(descricao: string, permiteComentario: boolean, arquivo: File) {
    const formData = new FormData();
    formData.append('description', descricao);
    formData.append('allowComments', permiteComentario ? 'true' : 'false');
    formData.append('imageFile', arquivo);
    return this.http.post(
      `${environment.apiUrl}/photos/upload`,
      { formData },
      { observe: 'events', reportProgress: true }
    );
  }
}
