import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // Datele utilizatorului
  user = {
    firstName: 'Ion',
    lastName: 'Popescu',
    email: 'ion.popescu@example.com',
    profileImage: 'assets/img/cv.jpg', // Imaginea de profil
    registrationDate: '2023-01-15' // Data de înregistrare
  };

  constructor() {}

  ngOnInit(): void {}
}
