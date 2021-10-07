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

  buscarComentarios(id: number): Observable<Comentarios> {
    return this.http.get<Comentarios>(`${environment.apiUrl}/photos/${id}/comments`);
  }

  incluirComentario(id: number, commentText: string): Observable<Comentario> {
    return this.http.post<Comentario>(`${environment.apiUrl}/photos/${id}/comments`, {
      commentText,
    });
  }
}
