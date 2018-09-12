import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Search } from '../search/search.model';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  ordersData : any;

  orderTypeList: Array<string>;
  orderType: string;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.orderTypeList = ["All", "Processed", "Cancelled"]
    this.getOrders();
  }

  onSearch(searchObj){
    console.log("Orders", searchObj);
    this.getOrders(searchObj);
  }

  getOrders (search?: Search) {
    this.dashboardService.getOrders(search)
      .subscribe(data => {
        this.ordersData = data;
        console.log(this.ordersData);
      }
    );
  }

}
