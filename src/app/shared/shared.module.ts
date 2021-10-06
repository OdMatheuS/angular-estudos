import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../components/mensagem/mensagem.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MensagemModule],
  exports: [ReactiveFormsModule, MensagemModule],
})
export class SharedModule {}
