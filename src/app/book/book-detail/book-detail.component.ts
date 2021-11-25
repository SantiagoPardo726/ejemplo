import { Component, Input, OnInit } from '@angular/core';
import { Editorial } from 'src/app/editorial/editorial';
import { Book } from '../book';
import { BookDetail } from '../bookDetail';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() bookDetail: BookDetail;
  constructor() {}

  ngOnInit() {
    console.log(this.bookDetail)
  }

}
