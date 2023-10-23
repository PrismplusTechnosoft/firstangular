import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.scss']
})
export class EmpdataComponent implements OnInit {
  emplist:any;
  constructor(public service:MasterService) { 
    this.service.getEmp().subscribe(result=>{
     this.emplist=result;
     console.log(" this.emplist", this.emplist)
    })
  }

  ngOnInit(): void {
  }

}
