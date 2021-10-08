import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    MatTabsModule,
    MatButtonModule
  ]
})
export class DashboardModule {
}
