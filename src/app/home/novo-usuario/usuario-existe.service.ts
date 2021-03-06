import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { first, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UsuarioExisteService {
  constructor(private http: HttpClient, private novoUsuario: NovoUsuarioService) {}

  getVerificaUsuarioExistente(nomeUsuario: string) {
    return this.http.get(`${environment.apiUrl}/user/exists/${nomeUsuario}`);
  }

  usuarioJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) => this.novoUsuario.getVerificaUsuarioExistente(nomeUsuario)),
        map((usuarioExiste) => (usuarioExiste ? { usuarioExistente: true } : null)),
        first()
      );
    };
  }
}
