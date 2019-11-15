import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/article.model';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../shared/article.service';
import { ErrorLogService } from 'src/app/shared/error-log.service';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;

  constructor(
    private activeRoutes: ActivatedRoute,
    private articleService: ArticleService,
    private errorService: ErrorLogService,
    private sessionService: SessionService
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
            console.log(this.article);
          } else {
            this.errorService.notify(response.message);
          }
        }
      )
    }
  }

}
