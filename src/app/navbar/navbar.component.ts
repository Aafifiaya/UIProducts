import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from '../login-form/login-form.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private md : MatDialog) { }

  ngOnInit(): void {
  }
  open(){
    this.md.open(LoginFormComponent, {
      panelClass:'my-class',
      scrollStrategy : new NoopScrollStrategy
    })

  }
}
