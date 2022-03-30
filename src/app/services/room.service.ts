
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IRoom } from 'src/models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private url='./assets/Data/rooms.json'
  constructor(private _http:HttpClient) { }
  getRoomInfo(): Observable<IRoom[]>{
    return this._http.get<IRoom[]>(this.url).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  handleError(error:HttpErrorResponse){
    return throwError(()=> new Error(error.message))
  }
}
