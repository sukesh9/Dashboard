import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { fakeBackendProvider } from './helpers/fake-backend';
import { JwtInterceptor } from './helpers/jwt.interceptor';

import { IconsModule } from '../icons/icons.module';
import { MainNavComponent } from './nav/main-nav/main-nav.component';
import { SideNavComponent } from './nav/side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { OrdersComponent } from './orders/orders.component';
import { DataTableModule } from "angular-6-datatable";
import { MenuComponent } from './menu/menu.component';
import { GroupByPipe } from './utils/group-by.pipe';
import { BusinessHoursComponent } from './business-hours/business-hours.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './settings/profile/profile.component';
import { OperationsComponent } from './settings/operations/operations.component';
import { ReportsComponent } from './reports/reports.component';
import { ItemSummaryComponent } from './reports/item-summary/item-summary.component';
import { PromotionSummaryComponent } from './reports/promotion-summary/promotion-summary.component';
import { CustomerSummaryComponent } from './reports/customer-summary/customer-summary.component';
import { RegularHoursComponent } from './business-hours/regular-hours/regular-hours.component';
import { SpecialHoursComponent } from './business-hours/special-hours/special-hours.component';
import { SearchComponent } from './search/search.component';
import { StatementsComponent } from './statements/statements.component';
import { BillingSummaryComponent } from './statements/billing-summary/billing-summary.component';
import { BillingStatementsComponent } from './statements/billing-statements/billing-statements.component';
import { MenuCategoriesComponent } from './menu/menu-categories/menu-categories.component';
import { PromotionsComponent } from './menu/promotions/promotions.component';
import { ChartsComponent } from './utils/charts/charts.component';
import { ZipcodeAnalysisComponent } from './reports/zipcode-analysis/zipcode-analysis.component';
import { CustomTableComponent } from './utils/custom-table/custom-table.component';
import { DeliveryPolygonComponent } from './settings/delivery-polygon/delivery-polygon.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainAppComponent } from './main-app/main-app.component';


FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SideNavComponent,
    HomeComponent,
    OrdersComponent,
    MenuComponent,
    GroupByPipe,
    BusinessHoursComponent,
    SettingsComponent,
    ProfileComponent,
    OperationsComponent,
    ReportsComponent,
    ItemSummaryComponent,
    PromotionSummaryComponent,
    CustomerSummaryComponent,
    RegularHoursComponent,
    SpecialHoursComponent,
    SearchComponent,
    StatementsComponent,
    BillingSummaryComponent,
    BillingStatementsComponent,
    MenuCategoriesComponent,
    PromotionsComponent,
    ChartsComponent,
    ZipcodeAnalysisComponent,
    CustomTableComponent,
    DeliveryPolygonComponent,
    LoginComponent,
    RegisterComponent,
    MainAppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    IconsModule,
    FusionChartsModule,
    DataTableModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
