import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { MeetnceleRequestService } from 'src/app/services/meetnceleRequest/meetncele-request.service';
import { Meeting_Request } from 'src/models/meetncele_request';

@Component({
  selector: 'app-meetncele-request',
  templateUrl: './meetncele-request.component.html',
  styleUrls: ['./meetncele-request.component.css']
})
export class MeetnceleRequestComponent implements OnInit {
  
  meetncele_request: Meeting_Request=new Meeting_Request();
  meetingTypeFlag: any;
  phonePattern = "[0-9]{9}";
  constructor( private _service:MeetnceleRequestService ) { }

  ngOnInit(): void {
  }

  
  validatemeetingType(value:any):void{
    if(value==="none")
      {this.meetingTypeFlag= true;}
    else
      {this.meetingTypeFlag = false;}
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
