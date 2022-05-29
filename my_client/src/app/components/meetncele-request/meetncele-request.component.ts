import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { MeetnceleRequestService } from 'src/app/services/meetnceleRequest/meetncele-request.service';
import { Meeting_Request } from 'src/models/meetncele_request';
import * as moment from 'moment';

@Component({
  selector: 'app-meetncele-request',
  templateUrl: './meetncele-request.component.html',
  styleUrls: ['./meetncele-request.component.css']
})
export class MeetnceleRequestComponent implements OnInit {
  
  meetncele_request: Meeting_Request=new Meeting_Request();
  meetingTypeFlag: any;
  phonePattern = "[0-9]{9}";
  minStartDate = moment(new Date()).format('YYYY-MM-DD')
  minEndDate: any;
  changeTime: any = 0;
  errFlag: boolean = false;
  constructor( private _service:MeetnceleRequestService ) { }

  ngOnInit(): void {
  }

  
  validatemeetingType(value:any):void{
    if(value==="none")
      {this.meetingTypeFlag= true;}
    else
      {this.meetingTypeFlag = false;}
  }
  updateAcceptableDate() {
    this.changeTime += 1;
    console.log(this.changeTime);
    this.minEndDate = moment(new Date(new Date(this.meetncele_request.StartDate).getTime() + (1000 * 60 * 60 * 24))).format('YYYY-MM-DD');
    if (new Date(this.meetncele_request.StartDate).getTime() > new Date(this.meetncele_request.EndDate).getTime()) {
      this.errFlag = true;
    }
    else { this.errFlag = false }
  }
  updateAcceptableDate2() {
    if (new Date(this.meetncele_request.StartDate).getTime() > new Date(this.meetncele_request.EndDate).getTime()) {
      this.errFlag = true;
    }
    else { this.errFlag = false }
  }
  submitData(form:NgForm){
    this._service.postMeetnceleRequestForm(this.meetncele_request).subscribe(res =>{
      if(res.message==="success"){
        // alert("Success!")
        let result:any = document.getElementById("result");
        result.innerText="Bạn đã gửi đơn đăng ký thành công. Chúng tôi sẽ sớm liên hệ đến bạn!"
        // this.onReset();
        form.resetForm();
        this.meetncele_request = new Meeting_Request()  
      }
      else{
        // alert("Fail!")
        let result:any = document.getElementById("result");
        result.innerText="Hệ thống đang xảy ra lỗi. Chúng tôi sẽ sớm khắc phục. Mong bạn thông cảm và trở lại vào lúc khác!"
      }
    })
  }
}
