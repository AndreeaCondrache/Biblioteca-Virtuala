import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { ProfileComponent } from './profile/profile.component';
import { MyLibraryComponent } from './my-library/my-library.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { RecentComponent } from './recent/recent.component';
import { AuthGuard } from './auth.guard';  // Importă AuthGuard

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'books',
    component: BooksComponent,
    canActivate: [AuthGuard], // Protejează ruta cu AuthGuard
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard], // Protejează ruta cu AuthGuard
  },
  {
    path: 'my-library',
    component: MyLibraryComponent,
    canActivate: [AuthGuard], // Protejează ruta cu AuthGuard
  },
  {
    path: 'add-book',
    component: AddBookComponent,
    canActivate: [AuthGuard], // Protejează ruta cu AuthGuard
  },
  {
    path: 'delete-book',
    component: DeleteBookComponent,
    canActivate: [AuthGuard], // Protejează ruta cu AuthGuard
  },
  {
    path: 'recent',
    component: RecentComponent,
    canActivate: [AuthGuard], // Protejează ruta cu AuthGuard
  },
];
