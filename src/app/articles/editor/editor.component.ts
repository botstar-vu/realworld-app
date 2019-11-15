import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/article.model';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ArticleService } from '../shared/article.service';
import { ErrorLogService } from 'src/app/shared/error-log.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  article: Article;
  tags: string;

  constructor(
    private activeRoutes: ActivatedRoute,
    private articleService: ArticleService,
    private errorService: ErrorLogService
  ) { }

  ngOnInit() {
    this.initArticle();
  }

  initArticle() {
    console.log('init article');
    if (this.activeRoutes.snapshot.params.id) {
      let id = this.activeRoutes.snapshot.params.id;
      this.articleService.load(id).then(
        response => {
          if (response.article) {
            this.article = response.article;
          } else {
            this.errorService.notify(response.message);
          }
        }
      )
    } else {
      this.article = new Article();
    }
  }

  publish() {
    if (this.tags) {
      this.article.tags = this.tags.split(' ');
    }

    if (this.activeRoutes.snapshot.params.id) {
      this.update();
    } else {
      this.create();
    }
    
  }

  private create() {
    this.articleService.publish(this.article).then((response) => {
      if (!response.article) {
        this.errorService.clear();
        this.errorService.add(response.message);
      }
    });
  }

  private update() {
    this.articleService.update(this.article).then((response) => {
      if (!response.article) {
        this.errorService.clear();
        this.errorService.add(response.message);
      }
    });
  }

}
