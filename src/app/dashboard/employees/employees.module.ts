import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {EmployeesComponent} from "./employees.component";
import {MatTableModule} from "@angular/material/table";

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
  }
]

@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
  ]
})
export class EmployeesModule { }
