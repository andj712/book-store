import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Button } from '../../components/button/button';
import { InputField } from '../../components/input-field/input-field';
import { ShadowOnHover } from '../../directives/shadow-on-hover';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, Button, InputField, ShadowOnHover],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email === 'admin' && this.password === 'admin') {
      this.router.navigate(['/books']);
    } else {
      alert('Invalid credentials');
    }
  }
}
