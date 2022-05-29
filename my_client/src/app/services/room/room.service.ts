
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IRoom } from 'src/models/room';

const baseUrl = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private _http:HttpClient) { }
  
  getRoomInfo(): Observable<IRoom[]>{
    return this._http.get<IRoom[]>(`${baseUrl}/rooms`).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  handleError(error:HttpErrorResponse){
    return throwError(()=> new Error(error.message))
  }
}
