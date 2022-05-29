import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookingRoomService } from 'src/app/services/booking_room/booking-room.service';
import { RoomService } from 'src/app/services/room/room.service';
import { Router, RouterModule } from '@angular/router';
import { roomDetails } from 'src/models/roomDetails';
@Component({
  selector: 'app-offer-room',
  templateUrl: './offer-room.component.html',
  styleUrls: ['./offer-room.component.css']
})
export class OfferRoomComponent implements OnInit {

  booknow_data: any;
  roomInfo: any;
  errMessage: any;
  temp: roomDetails[] = [];
  reservedRooms: roomDetails[] = [];
  changedRoom: any;
  constructor(private booking_service: BookingRoomService, private room_service: RoomService, private _router:Router) { }

  ngOnInit(): void {
    this.booking_service.getBooknowData().subscribe(
      data => this.booknow_data = data
    )
    this.booknow_data.checkIn = new Date(this.booknow_data.checkIn)
    this.booknow_data.checkOut = new Date(this.booknow_data.checkOut)

    this.room_service.getRoomInfo().subscribe({
      next: (data) => {
        this.roomInfo = data;
        console.log(this.roomInfo)
      },
      error: (err) => { this.errMessage = err }
    })

  }

  reserve() {
    let totalQty = 0;
    for(let i =0;i<this.reservedRooms.length;i++){
      totalQty += this.reservedRooms[i].roomQty
    }
    if(totalQty > this.booknow_data.numOfRoom || totalQty < this.booknow_data.numOfRoom){
        alert("Số lượng phòng bạn chọn không đúng với thông tin đã điền")
        return;
    }
    this.booking_service.setRoomDetailsData(this.reservedRooms)
    this._router.navigate(['/reservation']);
  }
  editRoomInfo(event: any) {
    let value = parseInt(event.target.value)
    let id = parseInt(event.target.id)
    let existed = false;
    this.changedRoom = this.roomInfo.find((value: any) => value.id == id)
    console.log(this.changedRoom.id);
    for(let i=0;i<this.temp.length;i++){
      if(this.temp[i].roomId == id){
        this.temp[i].roomQty = value;
        existed = true;
        break;
      }
    }
    if(!existed){
      this.temp.push(new roomDetails(id, this.changedRoom.title, this.changedRoom.price, this.changedRoom.personNumber, value));
    }
    
    console.log(this.temp)
    this.reservedRooms = this.temp.filter(this.checkQuantity)
    console.log(this.reservedRooms)
  }
  checkExistingRoom(room:any){
    return room.roomId == this.changedRoom.id;
  }
  checkQuantity(room:any) {
    return room.roomQty != 0
  }
}
