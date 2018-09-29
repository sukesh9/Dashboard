import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';


@Component({
  selector: 'app-zipcode-analysis',
  templateUrl: './zipcode-analysis.component.html',
  styleUrls: ['./zipcode-analysis.component.css']
})
export class ZipcodeAnalysisComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  zipcodeChartData: any;

  type = "column2d";

  ngOnInit() {
    this.getZipcodeChartData();
  }

  getZipcodeChartData(){
    this.dashboardService.getZipcodeChartData()
      .subscribe(data => {
        this.zipcodeChartData = data;
        console.log(this.zipcodeChartData);
      }
    );
  }

}
