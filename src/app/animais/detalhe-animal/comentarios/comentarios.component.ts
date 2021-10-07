import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Comentarios } from './comentarios';
import { ComentariosService } from './comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit {
  @Input() id!: number;

  public comentarios$!: Observable<Comentarios>;

  public comentarioForm!: FormGroup;

  constructor(private comentarioService: ComentariosService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.comentarios$ = this.comentarioService.buscarComentarios(this.id);
    this.comentarioForm = this.fb.group({
      comentario: ['', Validators.maxLength(300)],
    });
  }

  gravar(): void {
    const comentario = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentarioService.incluirComentario(this.id, comentario).pipe(
      switchMap(() => this.comentarioService.buscarComentarios(this.id)),
      tap(() => {
        this.comentarioForm.reset();
        alert('Comentario Salvo');
      })
    );
  }
}
