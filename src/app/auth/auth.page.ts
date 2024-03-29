import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {
  constructor(private authService: AuthService,private router:Router) {}
  onLogin() {
    this.authService.login();
    this.router.navigateByUrl('/places/tabs/discover')
  }
}
