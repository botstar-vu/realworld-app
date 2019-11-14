import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/article.model';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  article: Article;
  tags: string;

  constructor(
    private activeRoutes: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initArticle();
  }

  initArticle() {
    if (this.activeRoutes.snapshot.params.length > 0) {
      // TODO: load article
    } else {
      this.article = new Article();
    }
  }

  publish() {
    this.article.tags = this.tags.split(' ');
  }

}
