import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../shared/user-profile.model';
import { SessionService } from 'src/app/shared/session.service';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { ErrorLogService } from 'src/app/shared/error-log.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  profile: UserProfile;

  constructor(
    private sessionService: SessionService,
    private routes: Router,
    private userService: UserService,
    private errorService: ErrorLogService
  ) { }

  ngOnInit() {
    this.load();
  }

  save() {

  }

  logout() {
    this.sessionService.checkSession();
    this.routes.navigate(['/']);
  }

  load() {
    this.userService.loadProfile(this.sessionService.getSession().username).then(
      response => {
        if (response.data) {
          this.profile = response.data;
        } else {
          this.errorService.notify(response.message);
        }
      }
    )
  }

}
