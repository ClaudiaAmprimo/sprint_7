import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  email: FormControl;
  password: FormControl;
  alertMessage: string | null = null;

  constructor(private userService: UserService, private router: Router, private authService: AuthService){
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', Validators.required);

    this.userForm = new FormGroup({
      email: this.email,
      password: this.password
    })
  }

  ngOnInit(): void {
    this.alertMessage = null;
  }

  handleLogin() {
    this.alertMessage = null;
    if (this.userForm.valid) {
      const email = this.userForm.get('email')?.value;
      const password = this.userForm.get('password')?.value;

      this.userService.loginUser(email, password).subscribe(
        response => {
          // localStorage.setItem('token', response.accessToken);
          this.authService.login(response.accessToken);
          this.router.navigate(['/starships']);
        },
        error => {
          console.error('Error logging in:', error);
          this.alertMessage = 'Invalid email or password';
        }
      );
    }
  }
}
