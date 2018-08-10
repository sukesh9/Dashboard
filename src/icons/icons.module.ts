import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconHome, IconFile, IconShoppingCart, IconUsers, IconBarChart2, IconLayers, IconTrendingUp, IconStar, IconCalendar } from 'angular-feather';

const icons = [
  IconHome,
  IconFile,
  IconShoppingCart,
  IconUsers,
  IconBarChart2,
  IconLayers,
  IconTrendingUp,
  IconStar,
  IconCalendar
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
