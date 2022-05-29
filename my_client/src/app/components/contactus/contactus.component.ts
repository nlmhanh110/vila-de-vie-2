import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { ContactusService } from 'src/app/services/contactus/contactus.service';
import { Contactus } from 'src/models/contact_form';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactus_form: Contactus=new Contactus();
  phonePattern = "[0-9]{9}";
  constructor(private _service:ContactusService) { }

  ngOnInit(): void {
  }
  submitData(form:NgForm){
    this._service.postcontactusForm(this.contactus_form).subscribe(res =>{
      if(res.message==="success"){
        // alert("Success!")
        let result:any = document.getElementById("result");
        result.innerText="Bạn đã gửi đơn thành công. Chúng tôi sẽ sớm liên hệ đến bạn!"
        // this.onReset();
        form.resetForm();
        this.contactus_form = new Contactus()  
      }
      else{
        // alert("Fail!")
        let result:any = document.getElementById("result");
        result.innerText="Hệ thống đang xảy ra lỗi. Chúng tôi sẽ sớm khắc phục. Mong bạn thông cảm và trở lại vào lúc khác!"
      }
    })
  }
}
