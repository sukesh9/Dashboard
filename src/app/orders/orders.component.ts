import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  ordersData : any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getOrders();
  }

  onSearch(searchObj){
    console.log("Orders", searchObj);
  }

  getOrders () {
    this.dashboardService.getOrders()
      .subscribe(data => {
        this.ordersData = data;
        console.log(this.ordersData);
      }
    );
  }

}
