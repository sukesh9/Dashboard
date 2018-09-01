import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../dashboard.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  isActive: string;

  constructor(private dashboardService: DashboardService) { 
    this.isActive = "Dashboard";
  }

  ngOnInit() {
  }

  selectedGroupChanged(group){
    this.dashboardService.groupChanged.emit(group);
  }
}
