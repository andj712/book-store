import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-field.html',
  styleUrl: './input-field.scss',
})
export class InputField {
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() model: string = '';
  @Input() lowercase: boolean = false;

  @Output() modelChange = new EventEmitter<string>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    if (this.lowercase) {
      value = value.toLowerCase();
      input.value = value;
    }

    this.model = value;
    this.modelChange.emit(this.model);
  }
}
