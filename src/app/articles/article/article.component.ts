import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/article.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../shared/article.service';
import { ErrorLogService } from 'src/app/shared/error-log.service';
import { SessionService } from 'src/app/shared/session.service';
import { UserService } from 'src/app/user/shared/user.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;
  username: string;

  constructor(
    private activeRoutes: ActivatedRoute,
    private routes: Router,
    private articleService: ArticleService,
    private errorService: ErrorLogService,
    private sessionService: SessionService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loadArticle();
  }

  loadArticle() {
    let id = this.activeRoutes.snapshot.params['id'] as string;
    if (id && id.length > 0) {
      this.articleService.load(id).then(
        response => {
          if (response.article) {
            this.article = response.article;
            this.getUsername();
          } else {
            this.errorService.notify(response.message);
          }
        }
      )
    }
  }

  getUsername() {
    this.userService.getUsername(this.article.author).then(
      response => {
        this.username = response.username;
      }
    )
  }

  delete() {
    this.articleService.delete(this.article._id).then(
      response => {
        if (response.message) {
          this.errorService.notify(response.message);
        }
      }
    )
  }

  edit() {
    this.routes.navigate([`/editor/${this.article._id}`]);
  }

}
