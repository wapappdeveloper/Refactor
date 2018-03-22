import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { DataModel } from '../shared/data.model';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  dataList:DataModel[];
  url:string = "../../assets/data/data.json";
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    if(this.commonService.dataList !== null){
      this.dataList = this.commonService.dataList;
    }else{
      this.commonService.loadData(this.url, (res)=>{this.dataLoaded(res)},(err)=>this.dataFailedToLoad(err));
    }
  }

  dataLoaded(res:DataModel[]){
    console.log('dataLoaded',res);
    this.commonService.dataList = this.dataList = res;
  }

  dataFailedToLoad(err){
    console.error('dataFailedToLoad', err);
  }

}
