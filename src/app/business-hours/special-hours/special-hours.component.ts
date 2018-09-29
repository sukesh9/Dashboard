import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-special-hours',
  templateUrl: './special-hours.component.html',
  styleUrls: ['./special-hours.component.css']
})
export class SpecialHoursComponent implements OnInit {

  constructor() { }
  public isCollapsed = false;

    hours = [];

  ngOnInit() {
    this.getHoursDropDown();

  }
  
  getHoursDropDown(){
    for(let hour = 0; hour < 24; hour++) {
      this.hours.push(moment({ hour }).format('h:mm A'));
      this.hours.push(
          moment({
              hour,
              minute: 30
          }).format('h:mm A')
      );
  }
  }

}
