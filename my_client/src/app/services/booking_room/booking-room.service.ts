import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { BookingInfo } from 'src/models/bookingInfo';

const baseUrl = "http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class BookingRoomService {

  public booknow_data = new BehaviorSubject<any>([])
  public reservedRooms_data = new BehaviorSubject<any>([])
  public reservation_data = new BehaviorSubject<any>([])
  constructor(private _http:HttpClient) { }

  setBooknowData(data: any) {
    this.booknow_data.next(data);
  }
  getBooknowData() {
    return this.booknow_data.asObservable();
  }
  setReservationData(data: any) {
    this.reservation_data.next(data);
  }
  getReservationData() {
    return this.reservation_data.asObservable();
  }
  setRoomDetailsData(data: any) {
    this.reservedRooms_data.next(data);
  }
  getRoomDetailsData() {
    return this.reservedRooms_data.asObservable();
  }
  postReservationData(data:any){
    return this._http.post(`${baseUrl}/bookinginfo`,data)
  }
   postCustomerData(data:any){
    return this._http.post(`${baseUrl}/customer`,data)
  }
  getBookingInfo():Observable<BookingInfo[]>{
    return this._http.get<BookingInfo[]>(`${baseUrl}/bookinginfos`).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  handleError(error:HttpErrorResponse){
    return throwError(()=> new Error(error.message))
  }
}
