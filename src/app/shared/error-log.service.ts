import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorLogService {

  messages = [];

  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
          this.clear();
        }
     });
 }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  notify(message: string) {
    this.clear();
    this.add(message);
  }
}
