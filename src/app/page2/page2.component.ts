import { Component, OnInit } from '@angular/core';
import { DataModel } from '../shared/data.model';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  submitted:boolean = false;
  url:string = "api url to hit the new user detail";
  /**
   *"id": "1",
    "name": "name1",
    "surname": "surname1",
    "birthDate": "28-9-1983",
    "phone": "812312312",
    "city": "Warsaw",
    "street": "Domaniewska",
    "number": "2"
   */
  formData:DataModel = {
    id:"0000",
    name:"NAME",
    surname:"SURNAME",
    birthDate:"00/00/0000",
    phone:"0000000000",
    city:"CITY",
    street:"STREET",
    number:"NUMBER"
  };
  constructor(private commonService:CommonService) { }

  ngOnInit() {
  }

  onSubmit(event:any) {
    this.submitted = true;
    console.log(this.formData);
    //this.commonService.postData(this.url, this.formData, (res)=>{this.userDetailUpdated(res)}, (err)=>{this.updateFiled(err)});
  }

  userDetailUpdated(res){
    console.log(res);
  }

  updateFiled(err){
    console.log(err);
  }
}
