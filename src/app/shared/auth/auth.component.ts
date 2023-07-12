import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  signUp: boolean = false;
  signIn:boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.signUpPath()
  }

  signUpPath() {
    if (this.router.url === '/sign-up') this.signUp = true;
    else this.signIn = true
  }
}
