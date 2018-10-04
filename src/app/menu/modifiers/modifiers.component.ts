import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';


@Component({
  selector: 'app-modifiers',
  templateUrl: './modifiers.component.html',
  styleUrls: ['./modifiers.component.css']
})
export class ModifiersComponent implements OnInit {

  modifiersData: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getModifiersData() 
  }

  getModifiersData() {
    this.dashboardService.getModifiersData()
    .subscribe(data => {
       this.modifiersData =  data.data;
    }
  );
  }
}