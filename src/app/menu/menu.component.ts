import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../dashboard.service';

import { MenuItem } from '../menu/menu.model'
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  menuData: Array<MenuItem>;        // Json to populate the view
  selectedMenuItemToEdit: MenuItem;  // used to open the editing menu item in modal

  menuType: string;                  // Change view according to the selected menu type from dropdown
  menuTypes: Array<string>;         // Dropdown variable

  selectedCategory: string;         // scroll to the selected category from drop down

  addItems: Array<string>;           // Drop down list to add 
  addMenuItem: MenuItem;

  ngOnInit() {
    this.menuTypes = ["Catering Menu", "Full Menu", "Breakfast Menu", "Lunch Menu"];
    this.addItems = ["Add Category", "Add Item"];
    this.menuType = this.menuTypes[0];
    this.getMenu(this.menuType);
    this.addMenuItem = new MenuItem();

  }

  getMenu(mType?: string) {
    let type = mType.replace(/\s/g, '');

    this.dashboardService.getMenu(type)
      .subscribe(data => {
        console.log(data);
        this.menuData = data;
      }
    );
  }

  edit(){
    console.log(this.selectedMenuItemToEdit);
  }

  onMenuTypeChange(type: string){
    this.menuType = type;
    this.getMenu(type);
  }

  scroll(element){   
    var ele = document.getElementById(element);   
    window.scrollTo(ele.offsetLeft,ele.offsetTop); }

}
