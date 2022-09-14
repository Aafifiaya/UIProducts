import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { LoginFormComponent } from '../login-form/login-form.component';
import { JwtUserAuthService } from '../services/jwt-user-auth-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logedIn=sessionStorage.getItem('logedIn')
  constructor(private md : MatDialog,private jwtUserAuthService:JwtUserAuthService) { }

  ngOnInit(): void {
    console.log(this.logedIn)
    console.log(environment.logedIn)
  }
  open(){
    this.md.open(LoginFormComponent, {
      panelClass:'my-class',
      scrollStrategy : new NoopScrollStrategy
    })

  }
  logout(){
    this.jwtUserAuthService.logout()
  }
}
