import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { SessionService } from './session.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
  constructor(private sessionService: SessionService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercepted');
    request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.sessionService.getSession().token}`
        }
      });
      
    return next.handle(request);
  }
}
