import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../shared/session.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private sessionService: SessionService
    ) { }

  login(email: string, password: string): Promise<{code: number, message: string}> {
    return new Promise((resolve, reject) => {
      this.http.post('/api/login', {email: email, password: password}, {observe:'response'}).subscribe(
        success => {
          resolve({code: 200, message: 'Success'});
          let response = success.body as { token: string, username: string };
          this.sessionService.saveSession(response.token, response.username);
        },
        failure => {
          resolve({code: 401, message: failure.error.msg});
        }
      )
    });
  }
}
