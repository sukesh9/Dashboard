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

  selectedMenuItemToEdit: any;

  menuType: string;
  menuTypes: Array<string>;

  ngOnInit() {
    this.menuTypes = ["Catering Menu", "Full Menu", "Breakfast Menu", "Lunch Menu"];
    this.menuType = this.menuTypes[0];
    this.getMenu(this.menuType);

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
    this.getMenu(type);
  }

}
