import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importă Router corect
import { AuthenticationService } from '../services/authentication.service';
import { RouterModule } from '@angular/router'; 
// Importă RouterModule pentru a permite navigarea

@Component({
  selector: 'app-books',
  standalone: true,
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  imports: [RouterModule], // Adaugă RouterModule aici pentru a permite utilizarea routerului
})
export class BooksComponent {
  constructor(
    private authService: AuthenticationService,
    private router: Router // Injectează Router
  ) {}

  // Funcția de logout
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirecționează utilizatorul către pagina de login
  }
}
