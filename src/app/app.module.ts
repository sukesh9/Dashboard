import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { IconsModule } from '../icons/icons.module';
import { MainNavComponent } from './nav/main-nav/main-nav.component';
import { SideNavComponent } from './nav/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
