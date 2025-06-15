import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Books } from './pages/books/books';


export const routes: Routes = [
  { path: '', component: Login },
  { path: 'home', component: Home },
  { path: 'contact', component: Contact },
{ path: 'books', component: Books }
];
