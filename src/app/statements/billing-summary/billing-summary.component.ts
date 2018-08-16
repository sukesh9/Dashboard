import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';


@Component({
  selector: 'app-billing-summary',
  templateUrl: './billing-summary.component.html',
  styleUrls: ['./billing-summary.component.css']
})
export class BillingSummaryComponent implements OnInit {

  billingSummaryData: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getBillingSummaryData();
  }

  getBillingSummaryData () {
    this.dashboardService.getBillingSummary()
      .subscribe(data => {
        this.billingSummaryData = data.data;
        console.log(this.billingSummaryData);
      }
    );
  }

}
