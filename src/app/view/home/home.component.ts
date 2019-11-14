import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles = [];
  isPublic = true;

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

  requestPersonalFeed() {
    if (this.sessionService.checkSession()) {
      this.isPublic = false;
      // load personal feed
    } else {
      // redirect to login page
    }
  }

  requestGlobalFeed() {
    this.isPublic = true;
    // load first page
  }

}
