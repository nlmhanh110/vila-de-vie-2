import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookingRoomService } from 'src/app/services/booking_room/booking-room.service';
import { RoomService } from 'src/app/services/room/room.service';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-offer-room',
  templateUrl: './offer-room.component.html',
  styleUrls: ['./offer-room.component.css']
})
export class OfferRoomComponent implements OnInit {
  
  booknow_data:any;
  @ViewChild("roomList") roomList!: ElementRef;
  roomInfo:any;
  errMessage:any;
  p:any;
  html:any="";
  constructor(private booking_service:BookingRoomService, private room_service:RoomService) { }

  ngOnInit(): void {
    this.booking_service.getBooknowData().subscribe(
      data => this.booknow_data = data
    )
    this.booknow_data.checkIn = new Date (this.booknow_data.checkIn)
    this.booknow_data.checkOut = new Date (this.booknow_data.checkOut)
    
    this.room_service.getRoomInfo().subscribe({
      next:(data)=>{
        this.roomInfo = data;
        for (let each of data) {
            this.p = each.price.toLocaleString();
            this.html += '<div class="content__container content__container--type2">'
                + `<div class="content__left--2"><img src= ${each.img} alt="${each.title}"></div>`
                + '<div class="content__right--2 content__title--type1">'
                + `<h1><a  onclick="window.open('rooms/101','_blank');">${each.title}</a></h1>`
                + `<p> ${each.description1}</p>
               <p>${each.description2}</p>
               <p>${each.description3}</p>
               <h3>${this.p} VND/ ĐÊM</h3>`
                + `<div class="button__container">
                    <button type="button" class="button--type1" onclick="changeRoomType(${each.id})">
                        Chọn phòng
                    </button>
                </div></div></div>`
        }
        this.roomList.nativeElement.innerHTML = this.html;
       },
      error: (err)=> {this.errMessage=err}
    })
  }
    
  
}
