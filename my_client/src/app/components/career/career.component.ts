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
  CVfile:any;
  CLfile:any;
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
  onCVChange(event:any){
    if(event.target.files.length > 0){
      console.log("File info: ", event.target.files[0])
    }

    this.onSelectCVFile(event);
  }
  onSelectCVFile(event:any){
    if(event.target.files.length > 0){
      // console.log("File info: ",event.target.files[0])
      this.CVfile = event.target.files[0]
    }else{
      this.CVfile = null;
    }
    
  }
 
  submitData(data:any, form:NgForm){
    const formData = new FormData();
    formData.append("lastname",data.lastname);
    formData.append("firstname",data.firstname);
    formData.append("phone",data.phone);
    formData.append("email",data.email);
    formData.append("position",data.position);
    formData.append("linkedIn",data.linkedIn);
    formData.append("method",data.method);
    formData.append("data",data.data);
    formData.append("file",this.CVfile);
    for (var value of formData.values()) {
      console.log(value);
   }
    this._service.postApplicationForm(formData).subscribe({
      next:res=>{
        console.log(res);
        let result:any = document.getElementById("result");
        result.innerText="Bạn đã gửi đơn đăng ký thành công. Chúng tôi sẽ sớm liên hệ đến bạn!"
        // this.onReset();
        form.resetForm();
        this.application_form = new Application_Form()  
      },
      error:err=>{
        console.log("Error: ",err.message)
      }
    })
  }
}
