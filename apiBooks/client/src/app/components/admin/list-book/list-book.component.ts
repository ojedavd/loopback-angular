import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { BookInterface } from '../../../models/book-interface';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  constructor(private dataApiService: DataApiService) { }
  private books: BookInterface;

  ngOnInit() {
    this.getListBooks();
  }

  getListBooks(): void {
    this.dataApiService
      .getAllBooks()
      .subscribe((books: BookInterface) => (this.books = books));
  }

  onDeleteBook(id: string): void {
    if (confirm('Are you sure to delete?')) {
      this.dataApiService.deleteBook(id).subscribe();
    }
  }
}
