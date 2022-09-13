import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtUserAuthService } from './jwt-user-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorAuthService implements HttpInterceptor {
  constructor(
    private jwtUserAuth: JwtUserAuthService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let bearerAuthHeaderString = this.jwtUserAuth.getAuthenticatedToken();
    let username = this.jwtUserAuth.getAuthenticatedUser();
    if(bearerAuthHeaderString && username) {
      req = req.clone({
        setHeaders: {
          Authorization: bearerAuthHeaderString
        }
      })
    }
    return next.handle(req);
  }
}