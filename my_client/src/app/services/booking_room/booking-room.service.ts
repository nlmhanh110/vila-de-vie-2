import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingRoomService {

  public booknow_data = new BehaviorSubject<any>([])
  constructor() { }

  setBooknowData(data:any){
    this.booknow_data.next(data);
  }
  getBooknowData() {
    return this.booknow_data.asObservable();
 }
}
