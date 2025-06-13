import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,Navbar],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

}
