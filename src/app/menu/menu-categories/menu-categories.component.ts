import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';


@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css']
})
export class MenuCategoriesComponent implements OnInit {

  menuCategoriesData: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getMenuCategoriesData() 
  }

  getMenuCategoriesData() {
    this.dashboardService.getMenuCategoriesData()
    .subscribe(data => {
       this.menuCategoriesData =  data.data;
    }
  );
  }
}
