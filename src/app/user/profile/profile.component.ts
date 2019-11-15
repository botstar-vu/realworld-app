import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../shared/user-profile.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';
import { ErrorLogService } from 'src/app/shared/error-log.service';
import { Article } from 'src/app/articles/shared/article.model';
import { ArticleService } from 'src/app/articles/shared/article.service';
import { FeedService } from 'src/app/feed/feed.service';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: UserProfile;
  isPersonal = true;

  articles = [];

  constructor(
    private routes: ActivatedRoute,
    private userService: UserService,
    private feedService: FeedService,
    private errorService: ErrorLogService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.load();
    this.requestOwnPosts();
  }

  load() {
    let username = this.routes.snapshot.params['username'];
    this.userService.loadProfile(username).then(
      response => {
        if (response.data) {
          this.user = response.data;
        } else {
          this.errorService.notify(response.message);
        }
      }
    )
  }

  requestOwnPosts() {
    this.isPersonal = true;
    this.feedService.getPersonalPosts(this.sessionService.getSession().username).then(
      response => {
        if (response.data) {
          this.articles = response.data;
          console.log(response.data);
        } else {
          this.errorService.notify(response.message);
        }
      }
    )
  }

  requestFavoritePosts() {
    this.isPersonal = false;
  }

}
