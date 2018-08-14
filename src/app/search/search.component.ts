import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Search } from '../search/search.model'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchObj: Search;
  
  fromDate: any;
  toDate: any;

  periodList: string[];
  selectedPeriod: string;

  @Output() searched = new EventEmitter<Search>();

  constructor() {
    this.searchObj = {
                        from: "",
                        to: "",
                        searchString: ""
                     }
    this.periodList = ["yesterday", "Today","This Week", "Last Week", "This Month", "Last Month", "Last 7 days",
                        "Last 30 days","Last 60 days","Last 120 days","This Quarter", "Last Quarter"];
   }

  ngOnInit() {

  }

  OnSearch(){
    this.searched.emit(this.searchObj);
  }

  onperiodChange(item){
    this.searchObj.searchString = item; 
    this.selectedPeriod = item;
  }

  fromDateChange(e: any){
    this.searchObj.from = e.year; 
    console.log(this.searchObj)
    console.log(e)
  }

  toDateChange(e: any){
    this.searchObj.to = e.year; 
  }


}
