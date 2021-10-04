import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsuarioService } from './usuario/usuario.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private usuarioService: UsuarioService) {}

  autenticar(user: string, password: string): Observable<HttpResponse<any>> {
    return this.http
      .post(
        `${environment.apiUrl}/user/login`,
        {
          userName: user,
          password: password,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this.usuarioService.salvaToken(authToken);
        })
      );
  }
}
