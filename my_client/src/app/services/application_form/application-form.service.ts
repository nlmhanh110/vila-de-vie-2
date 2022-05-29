import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Application_Form } from 'src/models/application_form';

const baseUrl = "http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class ApplicationFormService {

  constructor(private _http:HttpClient) { }

  postApplicationForm(data:any){
    return this._http.post(`${baseUrl}/applicationform`,data)
  }
  
  handleError(error:HttpErrorResponse){
    return throwError(()=> new Error(error.message)) 
  }
}
