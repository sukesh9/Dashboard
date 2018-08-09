import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { OrdersComponent } from './orders/orders.component'
import { MenuComponent } from './menu/menu.component';
import { BusinessHoursComponent } from './business-hours/business-hours.component';
import { SettingsComponent } from './settings/settings.component'


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'businessHours', component: BusinessHoursComponent },
  { path: 'settings', component: SettingsComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
