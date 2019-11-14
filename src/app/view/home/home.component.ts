import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/session.service';
import { FeedService } from 'src/app/feed/feed.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles = [];
  isPublic = true;

  constructor(
    private sessionService: SessionService,
    private feedService: FeedService,
    private routes: Router
    ) { }

  ngOnInit() {
    this.requestGlobalFeed();
  }

  requestPersonalFeed() {
    this.clearFeed();
    if (this.sessionService.checkSession()) {
      this.isPublic = false;
      // load personal feed
    } else {
      this.routes.navigate(['/login']);
    }
  }

  requestGlobalFeed() {
    this.isPublic = true;
    this.clearFeed();
    this.feedService.getHomepage().then(
      response => {
        this.articles = response;
      }
    )
  }

  clearFeed() {
    this.articles = [];
  }

}
