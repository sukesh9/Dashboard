import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  @Input() data: any;
  @Input() height: any;
  @Input() width: any;
  @Input() type: any;

  chartData: any;

  ngOnInit() {
    this.initChartData();
  }

  initChartData(){
    this.chartData = {
      "chart": {
        "caption": "Restaurant Data",
        "numberprefix": "$",
        "theme": "fint",
        "numDivLines": "5",
        "numDivLineDashed": "0",
        "numVDivLines": "5",
        "vDivLineColor": "lightgrey",
        "vDivLineThickness": "1",
        "vDivLineAlpha": "70",
        "vDivLineDashed": "0",
        "vDivLineDashLen": "5",
        "vDivLineDashGap": "3",
        "showAlternateVGridColor": "1"      
    }, 
    data: null
    }
    if(this.data){
      this.chartData.data = this.data.data;
    }
    console.log(this.chartData)
  }

}
