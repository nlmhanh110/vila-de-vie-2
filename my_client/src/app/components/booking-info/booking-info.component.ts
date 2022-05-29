import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingRoomService } from 'src/app/services/booking_room/booking-room.service';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.css']
})
export class BookingInfoComponent implements OnInit {

  errMessage:string='';
  selectedId:any;
  selectedBookingInfo:any;
  booknow_data:any;
  reservedRooms:any;
  bookTime:any;
  totalAmount:any

  constructor(private _activatedRoute: ActivatedRoute, private booking_service: BookingRoomService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((param)=>{
      let id = param.get('id');
      if(id!=null){
        this.selectedId = id
        console.log(this.selectedId)
      }
    })

    // this.booking_service.getBookingInfo().subscribe({
    //   next:(data)=>{
    //     console.log(data);
    //     this.selectedBookingInfo = data.find((value:any)=>value.code == this.selectedId)
    //     console.log(this.selectedBookingInfo)
    //   },
    //   error: (err)=> {this.errMessage=err}
    // })
    this.booking_service.getReservationData().subscribe(
      data => this.selectedBookingInfo = data
      
    )
    this.booking_service.getBooknowData().subscribe(
      data =>this.booknow_data = data
    )
    this.booking_service.getRoomDetailsData().subscribe(
      data => this.reservedRooms=data
      
    )
    console.log(this.reservedRooms)
    this.booknow_data.checkIn = new Date(this.booknow_data.checkIn)
    this.booknow_data.checkOut = new Date(this.booknow_data.checkOut)
    this.bookTime = new Date(this.selectedBookingInfo.get('bookTime'))
    this.totalAmount = new Number(this.selectedBookingInfo.get('totalAmount'))

  }

}
