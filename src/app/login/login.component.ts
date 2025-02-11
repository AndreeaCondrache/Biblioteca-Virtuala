import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Pentru ngModel
import { CommonModule } from '@angular/common'; // Pentru ngIf
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], // Importă modulele necesare
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  login(): void {
    const success = this.authService.login(this.email, this.password);
    if (success) {
      this.router.navigate(['/books']);
    } else {
      this.errorMessage = 'Email sau parolă incorectă';
    }
  }
}
