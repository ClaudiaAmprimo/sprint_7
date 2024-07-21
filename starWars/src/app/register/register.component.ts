import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit  {
  userForm: FormGroup;
  name: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  alertMessage: string | null = null;
  alertType: 'success' | 'danger' | null = null;
  isAuthenticated: boolean = false;

  constructor(private userService: UserService, private http: HttpClient, private router: Router, private authService: AuthService){
    this.name = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]);
    this.lastName = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.pattern('^(?=.*[!@#$%^&*]).{8,}$'), Validators.required]);
    this.userForm = new FormGroup({
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    })
  }
  ngOnInit() {
    this.updateUserState();
  }

  handleSubmit() {
    this.alertMessage = null;
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      const subscriptionAlerts = {
        next: (response: any) => {
          this.alertType = 'success';
          this.alertMessage = 'Successfully registered user';
          console.log('Usuario registrado:', response);
          console.log('Token de autenticación:', response.accessToken);
          this.authService.login(response.accessToken);
          this.userForm.reset();
          this.updateUserState();
          this.router.navigate(['/starships']);
        },
        error: (error: any) => {
          console.error('Error response:', error);
          if (error.status === 400 && error.error && error.error.includes('Email already exists')) {
            this.alertType = 'danger';
            this.alertMessage = 'This email already exists';
          } else {
            console.error('Unexpected error:', error);
          }
        }
      };
      this.userService.registerUser(user).subscribe(subscriptionAlerts);
    }
  }

  updateUserState() {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated: boolean) => {
        this.isAuthenticated = isAuthenticated;
      }
    );
  }

  logout() {
    this.authService.logout();
    this.isAuthenticated = false;
  }

  closeForm() {
    this.router.navigate(['/']);
  }
}
