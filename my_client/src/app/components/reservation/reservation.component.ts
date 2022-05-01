import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/models/reservation';
import { FormBuilder, NgForm } from '@angular/forms';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservation = new Reservation();
  phonePattern = "[0-9]{9}";
  constructor() { }

  ngOnInit(): void {
  }
  submitData(form:NgForm){}
}
