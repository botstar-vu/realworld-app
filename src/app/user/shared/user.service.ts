import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/shared/session.service';
import { UserProfile } from './user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) { }

  loadProfile(username: string): Promise<{data:UserProfile, message: string}> {
    return new Promise((resolve, reject) => {
      this.http.get(`/api/profile/${username}`, {observe: 'response'}).subscribe(
        success => {
          let profile = success.body as UserProfile;
          profile.password = '';
          resolve({data: profile, message: 'Success'});
        },
        failure => {
          resolve({data: null, message: failure.error.message});
        }
      )
    });
  }

  saveProfile(profile: UserProfile): Promise<{data:UserProfile, message: string}> {
    return new Promise((resolve, reject) => {
      this.http.post(`/api/profile/edit`, {profile}, {observe: 'response'}).subscribe(
        success => {
          let result = success.body as UserProfile;
          resolve({data: result, message: 'Success'});
        },
        failure => {
          resolve({data: null, message: failure.error.message});
        }
      )
    })
  }
}
