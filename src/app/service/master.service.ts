import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiurl:any
  constructor(public http:HttpClient) { 
    this.apiurl="https://dummy.restapiexample.com/api/v1/employees";
  }

  getEmp(){
    return this.http.get(this.apiurl);
  }
}
