import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { SessionService } from '../shared/session.service';
import { UserProfile } from '../user/shared/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
    private routes: Router,
    private sessionService: SessionService
  ) { }

  register(email: string, username: string, password: string): Promise<{code: number, msg: string}> {
    return new Promise((resolve, reject) => {
      this.http.post('/api/register', {email: email, username: username, password: password}, {observe:'response'}).subscribe(
        success => {
          console.log('suc', success.body);
          let response = success.body as { token: string, user: UserProfile }
          console.log('res', response);
          this.sessionService.saveSession(response.token, response.user.username, response.user._id);
          this.routes.navigate(['/']);
          resolve({code: 200, msg: 'login success'});
        },
        failure => {
          resolve({code: 401, msg: failure.error.message});
        }
      )
    })
  }
}
