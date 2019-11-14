import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
    private routes: Router
  ) { }

  register(email: string, username: string, password: string): Promise<{code: number, msg: string}> {
    return new Promise((resolve, reject) => {
      this.http.post('/api/register', {email: email, name: username, password: password}, {observe:'response'}).subscribe(
        success => {
          this.routes.navigate(['/login']);
          resolve({code: 200, msg: 'login success'});
        },
        failure => {
          resolve({code: 401, msg: failure.error.msg});
        }
      )
    })
  }
}
