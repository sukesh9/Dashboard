import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeData: any = {};

  restaurantOpenClose: boolean; // is restaurant opne or not
  dineIn: boolean; // is dine in open or not

  chartData: any; // data for chart

  deliveryOption : Array<string> = ["Pickup","Delivery", "Delivery/Pickup"];      // delivery options in the dropdown
  selectedDeliveryOption: string = "";                                            // to display selected option

  type = "line";

  fontColor: any;

  

  constructor(private dashboardService: DashboardService) { 
    this.chartData = {
      "chart": {
          "caption": "Harry's SuperMart",
          "numberprefix": "$",
          "theme": "fint",
          "numDivLines": "5",
          "numDivLineDashed": "0",
          "numVDivLines": "5",
          "vDivLineColor": "lightgrey",
          "vDivLineThickness": "1",
          "vDivLineAlpha": "70",
          "vDivLineDashed": "0",
          "vDivLineDashLen": "5",
          "vDivLineDashGap": "3",
          "showAlternateVGridColor": "1" 

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
    // if(this.restaurantOpenClose == true){
    //   this.fontColor= {'color': 'green'};
    // }
  }

}
