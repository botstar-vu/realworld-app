import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../articles/shared/article.model';
import { SessionService } from '../shared/session.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) { }

  getHomepage(): Promise<Article[]> {
    return new Promise((resolve, reject) => {
      this.http.get('/api/feed/home', { observe: 'response'}).subscribe(
        success => {
          const articleList = success.body as Article[];
          console.log(articleList);
          resolve(articleList);
        },
        failure => {
          resolve(null);
        }
      )
    });
  }

  getPersonalPosts(): Promise<{data: Article[], message: string}> {
    const username = this.sessionService.getSession().username;
    return new Promise((resolve, reject) => {
      this.http.get(`/api/feed/${username}`, { observe: 'response'}).subscribe(
        success => {
          const articleList = success.body as Article[];
          resolve({data: articleList, message: 'Success'});
        },
        failure => {
          resolve({data: null, message: failure.error.message});
        }
      )
    })
  }

}
