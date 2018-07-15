import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconHome, IconFile, IconShoppingCart, IconUsers, IconBarChart2, IconLayers, IconTrendingUp, IconStar } from 'angular-feather';

const icons = [
  IconHome,
  IconFile,
  IconShoppingCart,
  IconUsers,
  IconBarChart2,
  IconLayers,
  IconTrendingUp,
  IconStar
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
