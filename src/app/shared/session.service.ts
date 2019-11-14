import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  saveSession(token: string, username: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  }

  checkSession(): boolean {
    return localStorage.getItem('token') != null;
  }

  getSession(): {token: string, username: string} {
    return { token: localStorage.getItem('token'), username: localStorage.getItem('username') }
  }

  clearSession() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }
}
