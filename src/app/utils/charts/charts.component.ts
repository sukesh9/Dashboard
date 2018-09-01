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
  @Input() dataFormat: any;
  @Input() type: any;

  ngOnInit() {
  }

}
