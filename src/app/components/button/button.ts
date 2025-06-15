
export class Button {
}
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class ButtonComponent {
  @Input() text: string = 'Klikni';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() color: string = '#007bff'; // plava
}
