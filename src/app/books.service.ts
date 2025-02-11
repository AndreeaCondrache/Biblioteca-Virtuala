import { Injectable } from '@angular/core';
import { Book } from './book.model';  // Importăm modelul Book

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private storageKey = 'books'; // Cheia pentru localStorage

  constructor() {
    // La inițializare, ne asigurăm că lista de cărți este salvată în localStorage
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify([])); // Dacă nu există, salvăm un array gol
    }
  }

  // Metodă pentru a obține lista de cărți
  getBooks(): Book[] {
    const books = localStorage.getItem(this.storageKey);
    return books ? JSON.parse(books) : [];  // returnează cărțile din localStorage
  }

  // Metodă pentru a obține o carte după id
  getBookById(id: number): Book | undefined {
    const books = this.getBooks();
    return books.find(book => book.id === id);
  }

  // Metodă pentru a adăuga o carte
  addBook(book: Book): void {
    const books = this.getBooks();  // Obține lista curentă de cărți
    books.push(book); // Adaugă cartea
    localStorage.setItem(this.storageKey, JSON.stringify(books)); // Salvează lista actualizată în localStorage
  }

  // Metodă pentru a șterge o carte
  deleteBook(id: number): void {
    let books = this.getBooks();  // Obține lista de cărți
    books = books.filter(book => book.id !== id); // Filtrează cartea care trebuie ștearsă
    localStorage.setItem(this.storageKey, JSON.stringify(books)); // Actualizează localStorage
  }
}
