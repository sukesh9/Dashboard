import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../dashboard.service'
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  menuData: any;

  selectedItem: any;

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.dashboardService.getMenu()
      .subscribe(data => {
        console.log(data);
        this.menuData = data;
      }
    );
  }

  edit(){
    console.log(this.selectedItem);
  }

}
