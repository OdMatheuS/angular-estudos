import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.css']
})
export class NovoAnimalComponent implements OnInit {
  public formularioAnimal!:FormGroup
  public file!:File
  public preview!:string
  public percentualConcluido = 0

  constructor(private animaisService:AnimaisService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  uploadAnimal():void{}

  gravaArquivo(arquivo:any):void{}

}
