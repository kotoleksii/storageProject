import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyCustomPaginatorIntl, StorageComponent} from "./storage.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {StorageRoutingModule} from "./storage-routing.module";
import {AddModalModule} from "../../shared/components/add-modal/add-modal.module";



@NgModule({
  declarations: [StorageComponent],
  imports: [
    CommonModule,
    StorageRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AddModalModule
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}
  ]
})
export class StorageModule {
}
