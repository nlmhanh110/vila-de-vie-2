import { Component, OnInit } from '@angular/core';

import { Find_Booking_Info } from 'src/models/find_booking_info';


@Component({
  selector: 'app-find-booking-info',
  templateUrl: './find-booking-info.component.html',
  styleUrls: ['./find-booking-info.component.css']
})
export class FindBookingInfoComponent implements OnInit {

  findBookingInfo: Find_Booking_Info= new Find_Booking_Info()

  constructor() { }

  ngOnInit(): void {
  }
  submitData(data:any){
    
  }
}
