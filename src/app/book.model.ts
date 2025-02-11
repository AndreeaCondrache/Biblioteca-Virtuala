export class Book {
    constructor(
      public id: number,
      public title: string,
      public author: string,
      public description: string,
      public coverImage: string,
      public genre: string  // Adăugăm genul cărții
    ) {}
  }
  