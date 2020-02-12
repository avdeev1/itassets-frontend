import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuLinkComponent } from './menu-link/menu-link.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DepartmentPageComponent } from './department-page/department-page.component';
import { ComputerPageComponent } from './computer-page/computer-page.component';
import { SoftPageComponent } from './soft-page/soft-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuLinkComponent,
    MainPageComponent,
    DepartmentPageComponent,
    ComputerPageComponent,
    SoftPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
