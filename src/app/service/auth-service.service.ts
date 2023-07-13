import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { UserLogin, UserRegister } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private appUrl: string;
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.appUrl = environment.endpoint;
    this.apiUrl = 'api/auth';
  }

  signUp(user: UserRegister) {
    return this.http.post(`${this.appUrl}${this.apiUrl}/register`, user);
  }
  signIn(user:UserLogin): Observable<string>{
    return this.http.post<string>(`${this.appUrl}${this.apiUrl}/login`, user);
  }
}
