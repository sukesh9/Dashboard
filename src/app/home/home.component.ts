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
  chartType: string ="Orders";

  deliveryOption : Array<string> = ["Pickup","Delivery", "Delivery/Pickup"];      // delivery options in the dropdown
  selectedDeliveryOption: string = "Pickup";                                            // to display selected option

  type = "line";

  fontColor: any;

  

  constructor(private dashboardService: DashboardService) { 
  }

  ngOnInit() {
    this.getHome();
    this.getChartData(this.chartType);
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

  getChartData(type: string){
    this.dashboardService.getChart(type)
      .subscribe(data => {
        this.chartData = data;
        console.log(data, this.chartType);
      }
    );
  }
  onchartTypeChange (type: string) {
    this.chartType = type;
    this.getChartData(type);

  }

}
