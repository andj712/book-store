import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Button } from '../../components/button/button';
import { InputField } from '../../components/input-field/input-field';
import { ShadowOnHover } from '../../directives/shadow-on-hover';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
  imports: [CommonModule, FormsModule,Button,InputField,ShadowOnHover,Navbar],

})
export class Contact {
  name: string = '';
  email: string = '';
  message: string = '';
  formSubmitted = false;

  submitForm() {
    if (this.name && this.email && this.message) {
      this.formSubmitted = true;
      console.log('Poruka poslata:', {
        ime: this.name,
        email: this.email,
        poruka: this.message
      });

      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
}
