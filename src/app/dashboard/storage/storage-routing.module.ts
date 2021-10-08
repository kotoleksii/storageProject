import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StorageComponent} from "./storage.component";

const routes: Routes = [
  {
    path: '',
    component: StorageComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class StorageRoutingModule { }
