import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../shared/article.model';
import { UserService } from 'src/app/user/shared/user.service';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  @Input() article: Article
  username: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsername();
  }

  getUsername() {
    this.userService.getUsername(this.article.author).then(
      response => {
        this.username = response.username;
      }
    )
  }

}
