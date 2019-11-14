import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/shared/session.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient,
    private sessionService: SessionService
    ) { }

  publish(article: Article): Promise<Article> {
    return new Promise((resolve, reject) => {
      article.author = this.sessionService.getSession().username;
      article.time = new Date();
      this.http.post('/api/article/add', article, {observe: 'response'}).subscribe(
        success => {
          let result = success.body as Article;
          resolve(result);
        },
        failure => {
          resolve(null);
        }
      )
    });
  }
}
