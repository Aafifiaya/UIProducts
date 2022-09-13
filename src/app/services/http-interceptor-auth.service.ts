import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtUserAuthService } from './jwt-user-auth-service.service';

const TOKEN_HEADER_KEY = 'Authorization';

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
    let authReq = req;
    if(bearerAuthHeaderString && username) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + bearerAuthHeaderString) })
    }
    return next.handle(req);
  }
}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorAuthService, multi: true }
];