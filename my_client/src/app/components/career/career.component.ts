import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ApplicationFormService } from 'src/app/services/application_form/application-form.service';
import { Application_Form } from 'src/models/application_form';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  application_form: Application_Form = new Application_Form();
  phonePattern = "[0-9]{9}";
  positionFlag:any;
  methodFlag:any;
  dataFlag:any;
  constructor(private _service:ApplicationFormService) { 
  }

  ngOnInit(): void {
  }
  
  validatePosition(value:any):void{
    if(value==="none")
      {this.positionFlag= true;}
    else
      {this.positionFlag = false;}
  }
  validateMethod(value:any):void{
    if(value==="none")
      {this.methodFlag= true;}
      
    else
      {this.methodFlag = false;}
    
  }
  validateData(value:any):void{
    if(value==="none")
      {this.dataFlag= true;}
      
    else
      {this.dataFlag = false;}
    
  }
  submitData(form:NgForm){
    this._service.postApplicationForm(this.application_form).subscribe(res =>{
      if(res.message==="success"){
        // alert("Success!")
        let result:any = document.getElementById("result");
        result.innerText="Bạn đã gửi đơn đăng ký thành công. Chúng tôi sẽ sớm liên hệ đến bạn!"
        // this.onReset();
        form.resetForm();
        this.application_form = new Application_Form()  
      }
      else{
        // alert("Fail!")
        let result:any = document.getElementById("result");
        result.innerText="Hệ thống đang xảy ra lỗi. Chúng tôi sẽ sớm khắc phục. Mong bạn thông cảm và trở lại vào lúc khác!"
      }
    })
  }
}
