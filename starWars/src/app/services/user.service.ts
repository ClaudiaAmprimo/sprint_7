import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  user: User
  constructor(private http: HttpClient) {
    this.user = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    accessToken:"",
    }
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}
