import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorLogService {

  messages = [];

  constructor() { }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
