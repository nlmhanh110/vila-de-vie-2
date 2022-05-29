import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/models/reservation';
import { FormBuilder, NgForm } from '@angular/forms';
import { BookingRoomService } from 'src/app/services/booking_room/booking-room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  booknow_data: any;
  reservation = new Reservation();
  phonePattern = "[0-9]{9}";
  showHideGuestBox: boolean = false;
  guestName = "";
  offerRoom_data: any;
  maxPeople = 0;
  totalAmount = 0;
  promotion = "";

  constructor(private booking_service: BookingRoomService,private _router:Router) { }

  ngOnInit(): void {
    this.booking_service.getBooknowData().subscribe(
      data => this.booknow_data = data
    )
    this.booknow_data.checkIn = new Date(this.booknow_data.checkIn)
    this.booknow_data.checkOut = new Date(this.booknow_data.checkOut)
    this.booking_service.getRoomDetailsData().subscribe(
      data => this.offerRoom_data = data
    )
    for (let i = 0; i < this.offerRoom_data.length; i++) {
      this.maxPeople += this.offerRoom_data[i].maxPeople * this.offerRoom_data[i].roomQty
      this.totalAmount += this.offerRoom_data[i].roomQty * this.offerRoom_data[i].roomPrice
    }
  }
  submitData(data: any, form: NgForm) {
    const formData = new FormData();
    let code = this.makeid()
    formData.append("code",code)
    formData.append("lastname", data.lastname);
    formData.append("firstname", data.firstname);
    formData.append("phone", "0" + data.phone.toString());
    formData.append("email", data.email);
    formData.append("maxPeople", this.maxPeople.toString());
    formData.append("guestName", this.guestName);
    formData.append("comment", data.comment);
    formData.append("paymethod", data.paymethod);
    formData.append("roomInfo", JSON.stringify(this.offerRoom_data));
    formData.append("bookTime", new Date().toString());
    formData.append("totalAmount", this.totalAmount.toString());
    formData.append("bookingStatus", "paid");
    formData.append("checkInDate", this.booknow_data.checkIn.toString());
    formData.append("checkOutDate", this.booknow_data.checkOut.toString());
    formData.append("feedback", "");
    formData.append("promotion", this.promotion);
    for (var value of formData.values()) {
      console.log(value);
    }
    this.booking_service.postReservationData(formData).subscribe({
      next: res => {
        console.log(res);
      },
      error: err => {
        console.log("Error: ", err.message)
      }
    })
    this.booking_service.postCustomerData(this.reservation).subscribe({
      next: res => {
      },
      error: err => {
        console.log("Error: ", err.message)
      }
    })
    this.booking_service.setReservationData(formData)
    this._router.navigate([`/booking-info/${code}`]);
  }
  makeid() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }
}
