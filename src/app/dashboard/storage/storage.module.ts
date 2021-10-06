import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyCustomPaginatorIntl, StorageComponent} from "./storage.component";
import {RouterModule, Routes} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

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
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}
  ]
})
export class StorageModule {
}
