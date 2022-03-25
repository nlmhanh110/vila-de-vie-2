import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { customValidator } from '../validators/requestcheck.validator';
// import { ValidationService } from 'app/validation.service';


@Component({
  selector: 'app-meetncele-request',
  templateUrl: './meetncele-request.component.html',
  styleUrls: ['./meetncele-request.component.css']
})
export class MeetnceleRequestComponent implements OnInit {
events = ["Tiệc cưới","Hội nghị","Lễ kỉ niệm"]
requestForm : any;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.requestForm= this._formBuilder.group({
      LastName:['',[Validators.required,customValidator(/\@|\$/g)]],
      FirstName:['',[Validators.required,customValidator(/\@|\$/g)]],
      // Email :['',Validators.compose([Validators.required, ValidationService.emailValidator])],
      Phone : [],
      Address : []
    })

  }
}
