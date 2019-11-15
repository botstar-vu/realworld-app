import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  saveSession(token: string, username: string, id: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('id', id);
  }

  checkSession(): boolean {
    return localStorage.getItem('token') != null;
  }

  getSession(): {token: string, username: string, id: string} {
    return {
      token: localStorage.getItem('token'),
      username: localStorage.getItem('username'),
      id: localStorage.getItem('id')
    }
  }

  clearSession() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('id');
  }
}
