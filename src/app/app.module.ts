import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { FormsModule }    from '@angular/forms';

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


FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SideNavComponent,
    HomeComponent,
    OrdersComponent,
    MenuComponent,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
