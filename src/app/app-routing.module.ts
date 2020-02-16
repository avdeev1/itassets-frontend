import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {AppStaffComponent} from './app-staff/app-staff.component';
import {ComputerPageComponent} from './computer-page/computer-page.component';
import {HardwarePageComponent} from './hardware-page/hardware-page.component';
import {SoftwarePageComponent} from './software-page/software-page.component';
import {AddonPageComponent} from './addon-page/addon-page.component';
import {ComputerComponent} from './computer/computer.component';
import {UpdateComponentComponent} from './update-component/update-component.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'department/:id',
    component: AppStaffComponent,
  },
  {
    path: 'computer/category/:cat',
    component: ComputerPageComponent,
  },
  {
    path: 'computer/:id',
    component: ComputerComponent,
  },
  {
    path: 'hardware/category/:name',
    component: HardwarePageComponent,
  },
  {
    path: 'software/category/:name',
    component: SoftwarePageComponent,
  },
  {
    path: 'addon/category/:name',
    component: AddonPageComponent,
  },
  {
    path: 'update/:id',
    component: UpdateComponentComponent,
  },
  {
    path: 'create',
    component: UpdateComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
