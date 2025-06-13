import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [CommonModule,Navbar],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
