import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../shared/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @Input() articles: Article[];

  constructor() { }

  ngOnInit() {
  }

}
