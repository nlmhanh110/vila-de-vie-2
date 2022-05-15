import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meeting_Request } from 'src/models/meetncele_request';

const baseUrl = "http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class MeetnceleRequestService {

  constructor(private _http: HttpClient) { }

  postMeetnceleRequestForm(data: Meeting_Request): Observable<any> {
    return this._http.post<Meeting_Request[]>(`${baseUrl}/meeting_request`, data)

  }

}
