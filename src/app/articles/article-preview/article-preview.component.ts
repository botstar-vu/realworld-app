import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../shared/article.model';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  @Input() article: Article

  constructor() { }

  ngOnInit() {
  }

}