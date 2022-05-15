import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contactus } from 'src/models/contact_form';


const baseUrl = "http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private _http: HttpClient) { }
  postcontactusForm(data:Contactus):Observable<any>{
    return this._http.post<Contactus[]>(`${baseUrl}/contactform`,data)
  }
}
