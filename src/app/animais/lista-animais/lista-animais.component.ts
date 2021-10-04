import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/auth/usuario/usuario.service';
import { Animais } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  public animais!: Animais;

  constructor(private usuarioService: UsuarioService, private animaisService: AnimaisService) {}

  ngOnInit(): void {
    this.usuarioService.retornaUsuario().subscribe((usuario) => {
      const userName = usuario.name ?? '';
      this.animaisService.listaDoUsuario(userName).subscribe((animais) => {
        this.animais = animais;
      });
    });
  }
}
