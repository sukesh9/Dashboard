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
  reservation: boolean; // is dine in open or not

  chartData: any; // data for chart
  chartTypes: Array<string> = ["Sales","Orders"];  // whether chart is of orders or sales
  chartType: string ="Sales";

  deliveryOption : Array<string> = ["Pickup","Delivery", "Delivery/Pickup"];      // delivery options in the dropdown
  selectedDeliveryOption: string = "Pickup";                                            // to display selected option

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
    this.dashboardService.getHome()
      .subscribe(data => {
        console.log(data);
        this.homeData = data;
      }
    );
  }


  onDeliveryChange (item: string) {
    this.selectedDeliveryOption = item;
   let body = { 'delivery' : this.selectedDeliveryOption};
    this.dashboardService.postDelivery(body)
    .subscribe(() => console.log('scuces'));

  }

  onReservationChange () {
    let body = { 'reservation' : this.reservation};
     this.dashboardService.postDineInStatus(body)
     .subscribe(() => console.log('scuces'));

  }


  onRestaurantOpenCloseChange () {
    
   let body = { 'restaurantStatus' : this.restaurantOpenClose};
    this.dashboardService.postRestaurantOpenClose(body)
    .subscribe(() => console.log('scuces'));
  }

  onchartTypeChange (type: string) {
    this.chartType = type;
    this.dashboardService.getChart(type)
      .subscribe(data => {
        console.log(data, this.chartType);
        this.homeData = data;
      }
    );
  }

}
