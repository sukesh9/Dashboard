
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { CustomerSummary } from '../reports.model'

@Component({
  selector: 'app-customer-summary',
  templateUrl: './customer-summary.component.html',
  styleUrls: ['./customer-summary.component.css']
})
export class CustomerSummaryComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

   customerSummaryData: CustomerSummary[];

  ngOnInit() {
    this.getCustomerSummaryData();

  }

  getCustomerSummaryData() {
    this.dashboardService.getCustomerSummary()
    .subscribe(data => {
      this.customerSummaryData = data.data;
      console.log(this.customerSummaryData);
    }
  );
  }

}
