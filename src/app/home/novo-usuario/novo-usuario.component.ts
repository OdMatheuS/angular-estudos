import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { lowerCaseValidator } from './lowerCase.validator';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cadastro: NovoUsuarioService,
    private usuarioExistenteService: UsuarioExisteService
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.fb.group(
      {
        password: [''],
        fullName: ['', Validators.required, Validators.minLength(5)],
        userName: ['', [lowerCaseValidator], [this.usuarioExistenteService.usuarioJaExiste()]],
        email: ['', Validators.required, Validators.email],
      },
      {
        validators: [usuarioSenhaIguaisValidator],
      }
    );
  }

  postNovoUsuario(): void {
    const novoUsuario = this.novoUsuarioForm.getRawValue();
    if (this.novoUsuarioForm.valid) {
      this.cadastro.cadastrarNovoUsuario(novoUsuario).subscribe(
        (value: NovoUsuario) => {
          (res: HttpResponse<NovoUsuario>) => {
            console.log(res);
            console.log(value);
          };
        },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      );
    }
  }
}
