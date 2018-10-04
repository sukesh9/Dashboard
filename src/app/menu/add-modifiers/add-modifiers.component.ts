import { Component, OnInit } from '@angular/core';
import { AddModifier } from '../menu.model'

@Component({
  selector: 'app-add-modifiers',
  templateUrl: './add-modifiers.component.html',
  styleUrls: ['./add-modifiers.component.css']
})
export class AddModifiersComponent implements OnInit {

  selectedSelection: string;
  selectionList: string[] = ["Single-Select", "Multi-Select"];

  requiredCriteria: string;
  requiredCriteriaArray: string[] = [ "Optional", "Required"];

  isCollapsed: boolean;

  addModifiers: AddModifier[] = [];

  constructor() { }

  ngOnInit() {
    this.selectedSelection = this.selectionList[0];
    this.requiredCriteria = this.requiredCriteriaArray[0];

  }

  selectionListChange(item){
    this.selectedSelection =  item;
  }

  requiredCriteriaArrayChange(item){
    this.requiredCriteria = item;
  }

  addModifier(){
    //this.isCollapsed = !this.isCollapsed;
    this.addModifiers.push(new AddModifier());
  }
}
