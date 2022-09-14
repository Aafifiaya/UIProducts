import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'
export const ROLES = 'roles'
@Injectable({
  providedIn: 'root'
})
export class JwtUserAuthService {
  private baseUrl = 'http://localhost:8080';
  private user: User = new User();
  sessionExpired: boolean = false
  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) { }
  authenticate(username: string, password: string): Observable<Object> {
    this.user.username = username;
    this.user.password = password;
    return this.http.post(this.baseUrl + '/authenticate', this.user)
    .pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data['token']}`);
          // let rolesString = this.jwtHelper.decodeToken(data['token'])['roles'];
          // let roles = rolesString.substring(1, rolesString.length-1);
          // sessionStorage.setItem(ROLES, roles.split(", "));
          return data;
        }
      )
    );
  }
  register(user: User): Observable<any> {
    return this.http.post(this.baseUrl + '/register', user);
  }
  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }
  getAuthenticatedToken() {
    if (this.getAuthenticatedUser)
      return sessionStorage.getItem(TOKEN);
    return null
  }
  isUserLoggedIn() {
    let authenticatedUser = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(authenticatedUser === null);
  }
  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(ROLES);
    sessionStorage.setItem('logedIn', 'false');
    this.router.navigate([''])
  }
}