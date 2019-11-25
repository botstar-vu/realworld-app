import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

  isLogin(): boolean {
    return this.sessionService.checkSession();
  }

  getUsername(): string {
    return this.sessionService.getSession().username;
  }

}
