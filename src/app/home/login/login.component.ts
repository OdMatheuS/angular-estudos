import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public nome: string = '';
  public senha: string = '';

  constructor(private authService: AuthService,private router:Router) {}

  ngOnInit(): void {}

  efetuarLogin(): void {
    let foo = [this.nome, this.senha];
    console.log('dados form', foo);
    this.authService.autenticar(this.nome, this.senha).subscribe(
      (res) => {
        this.router.navigate(['animais'])
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        console.error("Fail Men",err.message);
      }
    );
  }
}
