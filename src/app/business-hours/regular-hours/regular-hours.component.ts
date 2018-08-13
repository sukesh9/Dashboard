import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';


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

  fromDateChange(){
    console.log(this.fromDate);
  }

}
