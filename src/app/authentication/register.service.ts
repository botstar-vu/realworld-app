import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorLogService } from '../shared/error-log.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
    private errorLog: ErrorLogService
  ) { }

  register(email: string, username: string, password: string): Promise<{code: number}> {
    return new Promise((resolve, reject) => {
      this.http.post('/api/register', {email: email, name: username, password: password}, {observe:'response'}).subscribe(
        success => {
          resolve({code: 200});
        },
        failure => {
          resolve({code: 401});
          this.errorLog.clear();
          this.errorLog.add(failure.error.msg);
        }
      )
    })
  }
}
