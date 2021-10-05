import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StorageComponent} from "./storage.component";
import {RouterModule, Routes} from "@angular/router";
import {MatTableModule} from "@angular/material/table";

const routes: Routes = [
  {
    path: '',
    component: StorageComponent,
  }
]

@NgModule({
  declarations: [StorageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
  ]
})
export class StorageModule { }
