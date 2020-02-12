import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {DepartmentPageComponent} from './department-page/department-page.component';
import {ComputerPageComponent} from './computer-page/computer-page.component';
import {SoftPageComponent} from './soft-page/soft-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainPageComponent,
  },
  {
    path: 'department',
    component: DepartmentPageComponent,
  },
  {
    path: 'computer',
    component: ComputerPageComponent,
  },
  {
    path: 'soft',
    component: SoftPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
