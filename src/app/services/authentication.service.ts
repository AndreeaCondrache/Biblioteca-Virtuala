// src/app/services/authentication.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private users = [
    { email: 'user1@example.com', password: 'password123' },
    { email: 'user2@example.com', password: 'mypassword' },
  ];

  constructor(private router: Router) {}

  // Funcție de login
  login(email: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Salvează un token în localStorage pentru a menține autentificarea
      localStorage.setItem('authToken', 'valid_token');  // Aici poți salva un token real (ex: JWT)
      return true;
    }

    return false;
  }

  // Funcție de logout
  logout(): void {
    // Elimina token-ul din localStorage când utilizatorul se deconectează
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']); // Redirecționează utilizatorul la login
  }

  // Verifică dacă utilizatorul este autentificat
  isLoggedIn(): boolean {
    // Verifică dacă există un token în localStorage
    return !!localStorage.getItem('authToken');
  }
}
