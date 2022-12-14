import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment';
import { JwtUserAuthService } from '../services/jwt-user-auth-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  public loginValid: boolean = true;
  username: string;
  password: string;
  
  constructor(private jwtUserAuth: JwtUserAuthService, private route: Router,private dialog:MatDialog) {}
  public onClickReturn() {}
  openSignUP() {}

  public onSubmit(): void {
    console.log(this.username);
    console.log(this.password);
    this.jwtUserAuth.authenticate(this.username, this.password).subscribe(
      (res) => {
        sessionStorage.setItem('logedIn', 'true');
        this.dialog.closeAll()
        this.route.navigate(['Products']);
      },
      (error) => {
        this.loginValid=false
      }
    );
  }

  public openSetEmail(): void {}
  ngOnInit(): void {
  }
}
