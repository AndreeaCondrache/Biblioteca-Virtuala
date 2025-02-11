import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-book',
  standalone: true,
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  imports: [CommonModule,FormsModule],
})
export class AddBookComponent {
  currentYear = new Date().getFullYear();
  genres = ['Ficțiune', 'Non-Ficțiune', 'Fantasy', 'Horror', 'Romantic', 'Sci-Fi'];
  stars = [1, 2, 3, 4, 5];

  book = {
    name: '',
    author: '',
    year: null,
    genre: '',
    addedDate: '',
    rating: 0,
    image: '',
  };

  bookImage: string | null = null;

  // Funcție pentru încărcarea imaginii
  onImageUpload(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.bookImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }


  setRating(stars: number) {
    this.book.rating = stars;
  }
  addBook(): void {// Funcție pentru a adăuga cartea
    console.log('Carte adăugată:', this.book);
    // Resetează formularul după submit
    this.book = {
      name: '',
      author: '',
      year: null,
      genre: '',
      addedDate: '',
      rating: 0,
      image: '',
    };
    this.bookImage = null;
  }
}
