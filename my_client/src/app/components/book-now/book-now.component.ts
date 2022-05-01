import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Book_now } from 'src/models/book_now';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {
  minCheckinDate = moment(new Date()).format('YYYY-MM-DD')
  constructor() { }
  booknow_form = new Book_now();
  minCheckoutDate: any;
  errFlag: boolean = false;
  changeTime: any = 0;
  ngOnInit(): void {

  }
  updateAcceptableDate() {
    this.changeTime += 1;
    console.log(this.changeTime);
    this.minCheckoutDate = moment(new Date(new Date(this.booknow_form.checkIn).getTime() + (1000 * 60 * 60 * 24))).format('YYYY-MM-DD');
    if (new Date(this.booknow_form.checkIn).getTime() > new Date(this.booknow_form.checkOut).getTime()) {
      this.errFlag = true;
    }
    else { this.errFlag = false }
  }
  updateAcceptableDate2() {
    if (new Date(this.booknow_form.checkIn).getTime() > new Date(this.booknow_form.checkOut).getTime()) {
      this.errFlag = true;
    }
    else { this.errFlag = false }
  }
}
