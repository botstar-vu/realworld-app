import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../shared/session.service';
import { Router } from '@angular/router';
import { UserProfile } from '../user/shared/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private sessionService: SessionService,
    private routes: Router
    ) { }

  login(email: string, password: string): Promise<{code: number, message: string}> {
    return new Promise((resolve, reject) => {
      this.http.post('/api/auth/login', {email: email, password: password}, {observe:'response'}).subscribe(
        success => {
          resolve({code: 200, message: 'Success'});
          console.log(success.body);
          let response = success.body as { token: string, user: UserProfile };
          this.sessionService.saveSession(response.token, response.user.username, response.user._id);
          this.routes.navigate(['/']);
        },
        failure => {
          resolve({code: 401, message: failure.error.message});
        }
      )
    });
  }
}
