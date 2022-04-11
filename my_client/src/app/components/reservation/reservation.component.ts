import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/models/reservation';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  r = new Reservation("ký túc xá DHQG khu B","nguyenlemyhanh12@gmail.com","","Hạnh","ATM","0389817396");

  constructor() { }

  ngOnInit(): void {
  }

}
