import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorLogService } from '../shared/error-log.service';
import { SessionService } from '../shared/session.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private errorLog: ErrorLogService,
    private sessionService: SessionService
    ) { }

  login(email: string, password: string): Promise<{code: number, message: string}> {
    return new Promise((resolve, reject) => {
      this.http.post('/api/login', {email: email, password: password}, {observe:'response'}).subscribe(
        success => {
          resolve({code: 200, message: 'Success'});
          let response = success.body as { token, username };
          this.sessionService.saveSession(response.token, response.username);
        },
        failure => {
          this.errorLog.clear();
          this.errorLog.add(failure.error.msg);
          resolve({code: 401, message: failure.error.msg});
        }
      )
    });
  }
}
