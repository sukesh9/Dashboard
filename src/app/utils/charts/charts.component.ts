import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements  OnInit,OnChanges {

  constructor() { }

  @Input() data: any;
  @Input() height: any;
  @Input() width: any;
  @Input() type: any;

  @Input() chartData: any;


  private _chartData: any = {
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
    };

  // get chartData(): string {
  //   return this._chartData;
  // }

  // @Input()
  // set chartData(chartData: string) {
  //   console.log('prev value: ', this._chartData);
  //   console.log('got name: ', name);
  //   this._chartData.data = chartData;
  // }
  ngOnChanges(changes: SimpleChanges) {
    const chartData: SimpleChange = changes.chartData;
    console.log('prev value: ', chartData.previousValue);
    console.log('got name: ', chartData.currentValue);
    this._chartData.data = chartData.currentValue.data;
  }

  ngOnInit() {
    console.log(this._chartData)
    //this.initChartData();
  }

  initChartData(){
    if(this.data){
      this._chartData.data = this.data.data;
    }
    console.log(this._chartData)
  }

}
