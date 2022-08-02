import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  
  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logIn(email: string, password: string): Observable<User> {

    return of({ email, password, token: 'Dummy token' });
  }

  signUp(email: string, password: string): Observable<User> {

    return of({ email, password });
  }
}
