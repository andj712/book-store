import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Button } from '../../components/button/button';
import { InputField } from '../../components/input-field/input-field';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,Button,InputField],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email: string = '';
  password: string = '';
 


  constructor(private router: Router) {}

  onLogin() {
    if (this.email === 'admin' && this.password === 'admin') {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }
}
