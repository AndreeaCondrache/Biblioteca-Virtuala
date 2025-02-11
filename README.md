#📚 Biblioteca Virtuală
## Descriere:
Acest proiect este o aplicație web creată în Angular, dedicată gestionării unei biblioteci online. Aplicația este construită conform celor mai bune practici și include funcționalități precum autentificarea utilizatorilor, protecția rutelor și testarea unităților.

🛠 Funcționalități principale
✅ Autentificare utilizatori

Utilizatorii se pot autentifica folosind email și parolă
Protecție pentru anumite rute utilizând AuthGuard
✅ Gestionarea cărților

Vizualizarea listei de cărți disponibile
Adăugarea, editarea sau ștergerea cărților (pentru utilizatorii cu roluri speciale)
Accesarea istoricului cărților recente
✅ Profilul utilizatorului

Vizualizarea și editarea detaliilor personale (nume, email, data înregistrării)
🚀 Tehnologii utilizate
🔹 Angular – Framework-ul principal pentru dezvoltarea aplicației
🔹 TypeScript – Limbaj utilizat pentru scrierea codului logic
🔹 HTML & CSS – Structura și stilizarea interfeței
🔹 Angular Router – Gestionarea rutelor și navigației
🔹 Local Storage – Stocarea locală a token-ului de autentificare


📂 Structura Proiectului
📁 src/app/components/

🏠 login/ - Componenta pentru autentificare
📖 books/ - Listarea cărților
👤 profile/ - Vizualizarea și editarea profilului
➕ add-book/ - Adăugarea unei cărți
🗑 delete-book/ - Ștergerea unei cărți
📁 src/app/services/

🔑 authentication.service.ts - Gestionarea autentificării utilizatorilor
🔐 auth.guard.ts - Protejarea rutelor pentru utilizatorii neautentificați
📁 src/app/

🗺 routes.ts - Configurarea rutelor aplicației

