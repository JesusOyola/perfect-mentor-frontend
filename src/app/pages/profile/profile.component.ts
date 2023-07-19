import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.profileForm = this.initForm();
  }

  initForm():FormGroup {
    return this.fb.group({
      name: ['jesus'],
      email: ['jesus@test.com'],
      password: ['123'],
      age: [30],
      role: ['Mentor'],
    });
  }

  logout(){
    localStorage.removeItem('token')
  }
}
