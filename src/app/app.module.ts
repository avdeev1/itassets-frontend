import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuLinkComponent } from './menu-link/menu-link.component';
import { MainPageComponent } from './main-page/main-page.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppStaffComponent } from './app-staff/app-staff.component';
import { ComputerPageComponent } from './computer-page/computer-page.component';
import { ComputerComponent } from './computer/computer.component';
import { HardwareListComponent } from './hardware-list/hardware-list.component';
import { HardwareComponent } from './hardware/hardware.component';
import { SoftwareListComponent } from './software-list/software-list.component';
import { SoftwareComponent } from './software/software.component';
import { AddonListComponent } from './addon-list/addon-list.component';
import { AddonComponent } from './addon/addon.component';
import { HardwarePageComponent } from './hardware-page/hardware-page.component';
import { SoftwarePageComponent } from './software-page/software-page.component';
import { AddonPageComponent } from './addon-page/addon-page.component';
import { UpdateComponentComponent } from './update-component/update-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuLinkComponent,
    MainPageComponent,
    LoginComponent,
    AppStaffComponent,
    ComputerPageComponent,
    ComputerComponent,
    HardwareListComponent,
    HardwareComponent,
    SoftwareListComponent,
    SoftwareComponent,
    AddonListComponent,
    AddonComponent,
    HardwarePageComponent,
    SoftwarePageComponent,
    AddonPageComponent,
    UpdateComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
