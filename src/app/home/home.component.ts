import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeData: any = {};

  restaurantOpenClose: boolean;
  delivery: boolean;

  chartData: any;
  

  constructor(private dashboardService: DashboardService) { 
    this.chartData = {
      "chart": {
          "caption": "Harry's SuperMart",
          "numberprefix": "$",
          "theme": "fint",
          "numDivLines": "0"
      },
      "data": [
          {
              "label": "Monday",
              "value": "880000"
          },
          {
              "label": "Tuesday",
              "value": "730000"
          },
          {
              "label": "Wednesday",
              "value": "590000"
          },
          {
              "label": "thursday",
              "value": "520000"
          },
          {
              "label": "Friday",
              "value": "330000"
          }
      ]
  }
  }

  ngOnInit() {
    this.getHome();
  }

  getHome () {
    let endPoint = 'home';
    this.dashboardService.get(endPoint )
      .subscribe(data => {
        console.log(data);
        this.homeData = data;
      }
    );
  }

  onDeliveryChange () {
    //this.delivery = !this.delivery;
  }

  onRestaurantOpenCloseChange () {

  }

}
