import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './book';
import { environment } from '../../environments/environment';
import { BookDetail } from './bookDetail';
@Injectable({
  providedIn: 'root'
})
export class BookService {

private apiUrl: string = environment.baseUrl + 'books';
constructor(private http: HttpClient) { }

getBooks(): Observable<Array<BookDetail>> {
  return this.http.get<Array<BookDetail>>(this.apiUrl);
}
}
