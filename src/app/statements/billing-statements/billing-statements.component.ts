import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';


@Component({
  selector: 'app-billing-statements',
  templateUrl: './billing-statements.component.html',
  styleUrls: ['./billing-statements.component.css']
})
export class BillingStatementsComponent implements OnInit {

  billingStatementsData: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getBillingStatementsData();
  }

  getBillingStatementsData () {
    this.dashboardService.getBillingStatements()
      .subscribe(data => {
        this.billingStatementsData = data.data;
        console.log(this.billingStatementsData);
      }
    );
  }

}
