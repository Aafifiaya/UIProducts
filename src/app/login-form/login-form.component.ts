
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { JwtUserAuthService } from '../services/jwt-user-auth-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public loginValid:boolean= true;
  username:string
  password:string
  
  constructor(private jwtUserAuth:JwtUserAuthService,private route:Router) {
    }
  public onClickReturn(){
  }
  openSignUP() {
    
  }
 
  public onSubmit():void {
      console.log(this.username)
      console.log(this.password)
      this.jwtUserAuth.authenticate(this.username,this.password).subscribe(
        res => {
            console.log(res)
            this.route.navigate(['Products'])    
        }, error =>{
console.log(error)
        }

      )
  }

  public openSetEmail() :void{
  }
  ngOnInit(): void {
  }

}
