import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeesComponent} from "./employees.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {EmployeeRoutingModule} from "./employee-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {AddModalEmployeeModule} from "../../shared/components/add-modal-employee/add-modal-employee.module";
import {MyCustomPaginatorIntl} from "../storage/storage.component";



@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AddModalEmployeeModule,
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}
  ]
})
export class EmployeesModule {
}
