import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  signUp: boolean = false;
  signIn: boolean = false;
  pepe: boolean = false;

  accessForm!: FormGroup;

  constructor(
    private router: Router,
    private readonly fb: FormBuilder,
    private AuthService: AuthServiceService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.signUpPath();
    this.accessForm = this.initForm();
    console.log(this.accessForm.controls['email']);
  }

  signUpPath() {
    if (this.router.url === '/sign-up') this.signUp = true;
    else this.signIn = true;
  }

  initForm(): FormGroup {
    if (this.router.url === '/sign-up') {
      return this.fb.group({
        username: ['', [Validators.required, Validators.minLength(3)]],
        role: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(3)]],
      });
    } else {
      return this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(3)]],
      });
    }
  }

  onSubmit() {
    if (this.router.url === '/sign-up') {
      if (
        this.accessForm.controls['role'].value.toLowerCase() === 'mentor' ||
        this.accessForm.controls['role'].value.toLowerCase() === 'mentee'
      ) {
        this.AuthService.signUp(this.accessForm.value).subscribe({
          next: () => {
            this.toastr.success(
              `User ${this.accessForm.controls['username'].value} created`,
              'User created'
            );
            this.router.navigate(['/sign-in']);
          },
        });
      } else {
        this.toastr.warning(
          `User not created the role field must be MENTOR or MENTEE`,
          'Attention!'
        );
      }
    }
    if (this.router.url === '/sign-in') {
      this.AuthService.signIn(this.accessForm.value).subscribe({
        next: (token) => {
          localStorage.setItem('token', token);
          this.toastr.success(
            `User ${this.accessForm.controls['email'].value} logeado`,
            'User logged'
          );
          this.router.navigate(['/profile']);
        },
        error: (err) => {
          this.toastr.error(
            `Verify that your email and password are correct.`,
            'Invalid Credentials'
          );
        },
      });
    }
  }
}
