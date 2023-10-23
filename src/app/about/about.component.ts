import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
day: any
  constructor() { 

  
}

setsession(){
  sessionStorage.setItem("userid","adminuser")
}
getsession(){
 console.log( sessionStorage.getItem("userid"))
}
    ngOnInit(): void {

  }

}
