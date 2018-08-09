import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-business-hours',
  templateUrl: './business-hours.component.html',
  styleUrls: ['./business-hours.component.css']
})
export class BusinessHoursComponent implements OnInit {
  private time: any;
  private weekDaysList: Array<string>;

  private menuTypes: Array<string>;         // Dropdown variable
  private menuType: string;                  // Change view according to the selected menu type from dropdown


  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.time = {hour: 13, minute: 30};
    this.weekDaysList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    this.getMenuTypes();

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

  onMenuTypeChange(type: string): void{
    this.menuType = type;
    //this.getMenu(type);
  }

}
