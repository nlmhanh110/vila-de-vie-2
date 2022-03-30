import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  constructor(private _form: FormBuilder) { 
  }
  public infoCandidate = this._form.group({
        "Lastname": [""],
        "Firstname": [""],
        "Email":["abc@gmail.com"],
        "Phone":[""],
        "LinkedIn":[""]
  })

  ngOnInit(): void {
  }

}
