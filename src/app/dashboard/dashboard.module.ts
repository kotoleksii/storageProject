import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {RouterModule, Routes} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'storage',
        loadChildren: () => import('./storage/storage.module').then(m => m.StorageModule),
      },
      {
        path: 'employees',
        loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule),
      }
    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatButtonModule
  ]
})
export class DashboardModule {
}
