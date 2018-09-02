import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

import { HomeComponent } from './home/home.component'
import { OrdersComponent } from './orders/orders.component'

import { MenuComponent } from './menu/menu.component';
import { MenuCategoriesComponent } from './menu/menu-categories/menu-categories.component'
import { PromotionsComponent } from './menu/promotions/promotions.component'

import { BusinessHoursComponent } from './business-hours/business-hours.component';
import { SettingsComponent } from './settings/settings.component'

import { ReportsComponent } from './reports/reports.component'
import { ItemSummaryComponent } from './reports/item-summary/item-summary.component'
import { PromotionSummaryComponent } from './reports/promotion-summary/promotion-summary.component'
import { CustomerSummaryComponent } from './reports/customer-summary/customer-summary.component'

import { StatementsComponent } from './statements/statements.component'
import { ZipcodeAnalysisComponent } from './reports/zipcode-analysis/zipcode-analysis.component';
import { OperationsComponent } from './settings/operations/operations.component';
import { DeliveryPolygonComponent } from './settings/delivery-polygon/delivery-polygon.component';
import { ProfileComponent } from './settings/profile/profile.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'orders', component: OrdersComponent },
  { path: 'menu', component: MenuComponent },
      { path: 'menuCategories', component: MenuCategoriesComponent },
      { path: 'promotions', component: PromotionsComponent },
  { path: 'businessHours', component: BusinessHoursComponent },
  { path: 'settings', component: SettingsComponent },
      { path: 'settings/operations', component: OperationsComponent },
      { path: 'settings/profile', component: ProfileComponent },
      { path: 'settings/deliveryPolygon', component: DeliveryPolygonComponent },
  { path: 'reports', component: ReportsComponent },
      { path: 'reports/itemSummary', component: ItemSummaryComponent },
      { path: 'reports/promotionSummary', component: PromotionSummaryComponent },
      { path: 'reports/customerSummary', component: CustomerSummaryComponent },
      { path: 'reports/zipcodeAnalysis', component: ZipcodeAnalysisComponent },
  { path: 'statements', component: StatementsComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
