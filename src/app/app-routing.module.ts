import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { OrdersComponent } from './orders/orders.component'
import { MenuComponent } from './menu/menu.component';
import { BusinessHoursComponent } from './business-hours/business-hours.component';
import { SettingsComponent } from './settings/settings.component'

import { ReportsComponent } from './reports/reports.component'
import { ItemSummaryComponent } from './reports/item-summary/item-summary.component'
import { PromotionSummaryComponent } from './reports/promotion-summary/promotion-summary.component'
import { CustomerSummaryComponent } from './reports/customer-summary/customer-summary.component'

import { StatementsComponent } from './statements/statements.component'


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'businessHours', component: BusinessHoursComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'reports', component: ReportsComponent },
      { path: 'reports/itemSummary', component: ItemSummaryComponent },
      { path: 'reports/promotionSummary', component: PromotionSummaryComponent },
      { path: 'reports/customerSummary', component: CustomerSummaryComponent },
  { path: 'statements', component: StatementsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
