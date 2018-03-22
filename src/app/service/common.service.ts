import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions }from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DataModel } from '../shared/data.model';

@Injectable()
export class CommonService {
  dataList:DataModel[] = null;

  constructor(private http:Http) { }

  loadData(url:string, success:Function, fail:Function){
    this.getData(url).subscribe((res:any)=>{
      success.call(this, res);
    },(err:any)=>{
      fail.call(this, err);
    });
  }

  postData(url:string, data:any, success:Function, fail:Function){
    this.setData(url, data).subscribe((res:any)=>{
      success.call(this, res);
    },(err:any)=>{
      fail.call(this, err);
    });
  }

  private getData(url:string):Observable<any>{
    return this.http.get(url)
    .map(res=>res.json())
    .catch(error => error);
  }

  private setData(url:string, data:any):Observable<any>{
    let headers:any = new Headers({ 'Content-Type': 'application/json' });
    let options:any = new RequestOptions({ headers: headers });
    return this.http.post(url, data, options)
    .map(res=>res.text())
    .catch(err=>err);
  }
}
