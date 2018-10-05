import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { Search } from '../../search/search.model';


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

  getBillingSummaryData (searchObj? : Search) {
    this.dashboardService.getBillingSummary(searchObj)
      .subscribe(data => {
        this.billingSummaryData = data.data;
        console.log(this.billingSummaryData);
      }
    );
  }

  onSearch(searchObj){
    console.log("Orders", searchObj);
    this.getBillingSummaryData(searchObj);
  }


}
