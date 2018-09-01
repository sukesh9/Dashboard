import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import * as moment from 'moment';



@Component({
  selector: 'app-regular-hours',
  templateUrl: './regular-hours.component.html',
  styleUrls: ['./regular-hours.component.css']
})
export class RegularHoursComponent implements OnInit {
  private time: any;
  private weekDaysList: Array<string>;

  private menuTypes: Array<string>;         // Dropdown variable
  private menuType: string;                  // Change view according to the selected menu type from dropdown

  private fromDate: Date;

  private locale = 'en'; // or whatever you want...
  private  hours = [];
  
  addHours: boolean;
  

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.addHours = false;
    this.time = {hour: 13, minute: 30};
    this.weekDaysList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    this.getMenuTypes();
    this.getHoursDropDown();

  }
  getMenuTypes () {
    let res = null;
    this.dashboardService.getMenuTypes()
      .subscribe(data => {
          this.menuTypes =  data.data;
          this.menuType = this.getMenuTypes[0];
      }
    );
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

  onMenuTypeChange(type: string): void{
    this.menuType = type;
    //this.getMenu(type);
  }

  fromDateChange(){
    console.log(this.fromDate);
  }

}
