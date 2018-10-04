import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconHome, IconFile, IconShoppingCart, IconUsers, IconBarChart2, IconLayers, IconTrendingUp, IconStar, IconCalendar, IconList, IconArrowLeft, IconPlusSquare } from 'angular-feather';

const icons = [
  IconHome,
  IconFile,
  IconShoppingCart,
  IconUsers,
  IconBarChart2,
  IconLayers,
  IconTrendingUp,
  IconStar,
  IconCalendar,
  IconList,
  IconArrowLeft,
  IconPlusSquare
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    icons
  ],
  declarations: []
})
export class IconsModule { }
