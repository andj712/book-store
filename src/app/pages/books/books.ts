import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.services';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../../components/navbar/navbar';
import { Button } from '../../components/button/button';
import { InputField } from '../../components/input-field/input-field';
import { ShadowOnHover } from '../../directives/shadow-on-hover';
import { TrimTextPipe } from '../../pipes/trim-text-pipe';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Navbar,
    Button,
    InputField,
    ShadowOnHover,
    TrimTextPipe,
  ],
  templateUrl: './books.html',
  styleUrl: './books.scss',
})
export class Books implements OnInit {
  books: any[] = [];
  query: string = 'angular';

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.search();
  }

  search() {
    this.bookService.searchBooks(this.query).subscribe((res) => {
      this.books = res.items || [];
    });
  }
}
