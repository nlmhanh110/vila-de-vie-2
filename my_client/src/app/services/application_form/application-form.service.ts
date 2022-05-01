import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application_Form } from 'src/models/application_form';

const baseUrl = "http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class ApplicationFormService {

  constructor(private _http:HttpClient) { }

  postApplicationForm(data:Application_Form):Observable<any>{
    return this._http.post<Application_Form[]>(`${baseUrl}/application_form`,data)
  }
}
