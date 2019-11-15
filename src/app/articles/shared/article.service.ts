import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/shared/session.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient,
    private sessionService: SessionService,
    private routes: Router
    ) { }

  publish(article: Article): Promise<{article: Article, message: string}> {
    return new Promise((resolve, reject) => {
      article.author = this.sessionService.getSession().id;
      article.time = new Date();
      this.http.post('/api/article/add', article, {observe: 'response'}).subscribe(
        success => {
          let result = success.body as Article;
          resolve({article: result, message: 'Success'});
          this.routes.navigate([`/article/${result._id}`]);
        },
        failure => {
          resolve({article: null, message: failure.error.message});
        }
      )
    });
  }

  public update(article: Article): Promise<{article: Article, message: string}> {
    return new Promise((resolve, reject) => {
      article.time = new Date();
      this.http.post('/api/article/edit', article, {observe: 'response'}).subscribe(
        success => {
          let result = success.body as Article;
          resolve({article: result, message: 'Success'});
          this.routes.navigate([`/article/${result._id}`]);
        },
        failure => {
          resolve({article: null, message: failure.error.message});
        }
      )
    });
  }

  load(id: string): Promise<{article: Article, message: string}> {
    return new Promise((resolve, reload) => {
      this.http.get(`/api/article/load/${id}`, {observe: 'response'}).subscribe(
        success => {
          let result = success.body as Article;
          resolve({article: result, message: 'success'});
        },
        failure => {
          resolve({article: null, message: failure.error.message});
        }
      )
    })
  }

  delete(id: string): Promise<{message: string}> {
    return new Promise((resolve, reload) => {
      this.http.delete(`/api/article/delete/${id}`, {observe: 'response'}).subscribe(
        success => {
          this.routes.navigate(['/']);
          resolve({message: 'success'});
        },
        failure => {
          resolve({message: failure.error.message});
        }
      )
    });
  }
}
