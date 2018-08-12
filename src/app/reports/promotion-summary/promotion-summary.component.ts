import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { PromotionSummary } from '../reports.model'



@Component({
  selector: 'app-promotion-summary',
  templateUrl: './promotion-summary.component.html',
  styleUrls: ['./promotion-summary.component.css']
})
export class PromotionSummaryComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  private promotionSummaryData: PromotionSummary[];

  ngOnInit() {
    this.getPromotionSummaryData();

  }

  getPromotionSummaryData() {
    this.dashboardService.getPromotionSummary()
    .subscribe(data => {
      this.promotionSummaryData = data.data;
      console.log(this.promotionSummaryData);
    }
  );
  }

}
