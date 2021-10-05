import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comentario, Comentarios } from './comentarios';

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  constructor(private http: HttpClient) {}

  buscarComentarios(comentarioId: number): Observable<Comentarios> {
    return this.http.get<Comentarios>(`${environment.apiUrl}/photos/${comentarioId}/comments`);
  }

  incluirComentario(comentarioId: number, textComment: string): Observable<Comentario> {
    return this.http.post<Comentario>(`${environment.apiUrl}/photos/${comentarioId}/comments`, {
      textComment,
    });
  }
}
