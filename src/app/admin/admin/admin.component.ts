import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    const validEmail = 'admin@shreeshyamsteel.com';
    const validPassword = 'admin123';

    if (this.email === validEmail && this.password === validPassword) {
      localStorage.setItem('adminLoggedIn', 'true');
      this.router.navigate(['/admin/dashboard']);
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}
