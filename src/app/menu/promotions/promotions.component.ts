import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';


@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  promotionsData: any;

  ngOnInit() {
    this.getPromotionsData();
  }
  getPromotionsData() {
    this.dashboardService.getPromotionsData()
    .subscribe(data => {
       this.promotionsData =  data.data;
    });
  }

}
