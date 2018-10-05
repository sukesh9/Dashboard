import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { MenuCategory } from '../menu.model';


@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css']
})
export class MenuCategoriesComponent implements OnInit {

  menuCategoriesData: MenuCategory[];

  addMenuCategory: MenuCategory;
  menuTypes: string[]; 
   

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getMenuCategoriesData();
    this.getMenuTypes();
     this.addMenuCategory = new MenuCategory();
  }

  getMenuCategoriesData() {
    this.dashboardService.getMenuCategoriesData()
    .subscribe(data => {
       this.menuCategoriesData =  data.data;
    }
  );
  }

  getMenuTypes () {
    let res = null;
      this.dashboardService.getMenuTypes()
        .subscribe(data => {
           this.menuTypes =  data.data;
           this.addMenuCategory.type = this.menuTypes[0];
        }
      );
  }

  save(){
    this.dashboardService.addMenuCategory(this.addMenuCategory)
      .subscribe(data => {
        this.menuCategoriesData =  data.data;
    })
  }
}
