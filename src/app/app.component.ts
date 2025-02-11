import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biblioteca-virtuala';

  constructor(private router: Router) {}

  logout(): void {
    // Elimină datele de autentificare din localStorage/sessionStorage
    localStorage.removeItem('authToken'); // sau sessionStorage.removeItem() dacă folosești sesiuni
    // Redirecționează utilizatorul la pagina de login
    this.router.navigate(['/login']);
  }
}
