import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { ItemSummary } from '../reports.model'


@Component({
  selector: 'app-item-summary',
  templateUrl: './item-summary.component.html',
  styleUrls: ['./item-summary.component.css']
})
export class ItemSummaryComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

   itemSummaryData: ItemSummary[];

  ngOnInit() {
    this.getItemSummaryData();
  }

  getItemSummaryData(){
    this.dashboardService.getitemSummary()
      .subscribe(data => {
        this.itemSummaryData = data.data;
        console.log(this.itemSummaryData);
      }
    );
  }

}
