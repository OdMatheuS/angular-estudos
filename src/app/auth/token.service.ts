import { Injectable } from '@angular/core';

const KEY = 'token';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  retornaToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  salvaToken(token: string): void {
    localStorage.setItem(KEY, token);
  }

  excluiToken(): void {
    localStorage.removeItem(KEY);
  }

  possouiToken() {
    return !!this.retornaToken();
  }
}
