import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';


@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})

export class OperationsComponent implements OnInit {

   autoPrintReceipts: boolean;

   defaultDeliveryEstimate: number;
   defaultPickupEstimate: number;

   autoPrintValue: number;
  
   SelectedOrderConfirmation: string;
   orderConfirmationList: Array<string>;

   interval : number;


  constructor(private dashboardService: DashboardService) { 

    this.interval = 5;

  }

  ngOnInit() {
    this.autoPrintValue = 5;
    this.orderConfirmationList = ["Email", "Fax", "Phone", "Tablet", "POS", "SMS"];
    this.SelectedOrderConfirmation = this.orderConfirmationList[0];
    this.defaultDeliveryEstimate = 10;   // have to get from service
    this.defaultPickupEstimate = 10;   // have to get from service
  }



  onautoPrintReceiptsChange() {

  }

  sendTestOrder(){

  }

  reduceEstimate(type) {

    if(type == 'pickUp'){
      this.defaultPickupEstimate -= this.interval;
    }

    if(type == 'delivery'){
      this.defaultDeliveryEstimate -= this.interval;
    }
  }

  increaseEstimate(type) {

    if(type == 'pickUp'){
      this.defaultPickupEstimate -= this.interval;
    }

    if(type == 'delivery'){
      this.defaultDeliveryEstimate += this.interval;
    }
  }

}
