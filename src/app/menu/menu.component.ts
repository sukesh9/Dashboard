import { Component, OnInit, OnDestroy } from '@angular/core';

import { DashboardService } from '../dashboard.service';

import { MenuItem } from '../menu/menu.model'
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy{

  constructor(private dashboardService: DashboardService) { }

  menuData: Array<MenuItem>;        // Json to populate the view
  selectedMenuItemToEdit: MenuItem;  // used to open the editing menu item in modal

  menuType: string;                  // Change view according to the selected menu type from dropdown
  menuTypes: Array<string>;         // Dropdown variable

  menuCategories: any;
  selectedCategory: string;         // scroll to the selected category from drop down

  addItems: Array<string>;           // Drop down list to add 
  addMenuItem: MenuItem;

  selectedGroup: any;
  selectedCategorymenuItems: any

  ngOnInit() {
    this.addItems = ["Add Category", "Add Item"];
    this.getMenuTypes();
    this.addMenuItem = new MenuItem();


    this.displaySelectedGroup();
  }

  ngOnDestroy(): void {
    
    this.dashboardService.menuItemsCategory = null;
    
  }

  displaySelectedGroup(group?){
    this.dashboardService.groupChanged.subscribe(group => {
      this.selectedCategorymenuItems = this.menuData.filter(item => {
        if(group && (item.category == group) ){
          return item;
        }
      })
    })
  }

  getMenuTypes () {
    let res = null;
      this.dashboardService.getMenuTypes()
        .subscribe(data => {
           this.menuTypes =  data.data;
           this.menuType = this.menuTypes[0];
           this.getMenu(this.menuType);
        }
      );
  }

  getMenu (mType?: string) : void {
    let type = mType.replace(/\s/g, '');

    this.dashboardService.getMenu(type)
      .subscribe(data => {
        console.log(data);
        this.menuData = data.data;
        this.dashboardService.menuItemsCategory = this.groupBy(this.menuData, "category");
         //this.displaySelectedGroup(this.dashboardService.menuItemsCategory[0].key);
        this.selectedCategorymenuItems = this.menuData.filter(item => {
          if(item.category == this.dashboardService.menuItemsCategory[0].key){
            return item;
          }
        })        
        console.log("cate" + this.dashboardService.menuItemsCategory);
      }
    );
  }

  edit(){
    console.log(this.selectedMenuItemToEdit);
  }

  onMenuTypeChange(type: string): void{
    this.menuType = type;
    this.getMenu(type);
  }

  scroll(element) : void{   
    var ele = document.getElementById(element);   
    window.scrollTo(ele.offsetLeft,ele.offsetTop); 
  }

  groupBy(collection: Array<any>, property: string): Array<any> {
    // prevents the application from breaking if the array of objects doesn't exist yet
    if(!collection) {
        return null;
    }

    const groupedCollection = collection.reduce((previous, current)=> {
        if(!previous[current[property]]) {
            previous[current[property]] = [current];
        } else {
            previous[current[property]].push(current);
        }

        return previous;
    }, {});

    // this will return an array of objects, each object containing a group of objects
    return Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));
}

}
