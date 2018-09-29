import { Component, OnInit } from '@angular/core';
import { RegularHoursModel, Session} from './hours.model'
import { DashboardService } from '../../dashboard.service';
import * as moment from 'moment';



@Component({
  selector: 'app-regular-hours',
  templateUrl: './regular-hours.component.html',
  styleUrls: ['./regular-hours.component.css']
})
export class RegularHoursComponent implements OnInit {


   menuTypes: Array<string>;         // Dropdown variable
   menuType: string;                  // Change view according to the selected menu type from dropdown

    timeList = [];

   regularHoursData: any;
    

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getRegularHoursData();
    this.getMenuTypes();
    this.getHoursDropDown();

  }

  getRegularHoursData(){
    this.dashboardService.getRegularHoursData()
    .subscribe(data => {
        this.regularHoursData =  data.data;
    }
  );
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
      this.timeList.push(moment({ hour }).format('h:mm A'));
      this.timeList.push(
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



}
