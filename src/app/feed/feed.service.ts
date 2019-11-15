import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../articles/shared/article.model';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  getHomepage(): Promise<Article[]> {
    return new Promise((resolve, reject) => {
      this.http.get('/api/feed/home', { observe: 'response'}).subscribe(
        success => {
          let articleList = success.body as Article[];
          console.log(articleList);
          resolve(articleList);
        },
        failure => {
          resolve(null);
        }
      )
    });
  }

  getPersonalPosts(username: string): Promise<{data: Article[], message: string}> {
    return new Promise((resolve, reject) => {
      this.http.get(`/api/feed/${username}`, { observe: 'response'}).subscribe(
        success => {
          let articleList = success.body as Article[];
          resolve({data: articleList, message: 'Success'});
        },
        failure => {
          resolve({data: null, message: failure.error.message});
        }
      )
    })
  }

}
